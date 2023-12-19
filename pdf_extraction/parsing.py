#!/usr/bin/env python
import PyPDF2
from langdetect import detect
import os
import tabula
import pandas as pd
import re
import pdfplumber
import camelot
import csv
import spacy
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import subprocess
from spellchecker import SpellChecker
import glob
import string
import langid
from nltk.corpus import wordnet as wn
from sklearn.metrics.pairwise import cosine_similarity

# nltk.download('stopwords')
lang = ""
directory_path = os.getcwd() + "/csv/"
folder_names = [f for f in os.listdir(directory_path) if os.path.isdir(os.path.join(directory_path, f))]

nlp_en = spacy.load("en_core_web_sm")
nlp_lt = spacy.load("lt_core_news_sm")


def extract_number(s):
    return int(s.split('-')[1].split('.')[0])

def fix_encoding(text, file):
    replacements = {
        'Ã„': 'Ą',
        'Ë': 'Ė',
        'Ï': 'Į',
        'Ã–': 'Ų',
        'Ü': 'Ū',
        'è': 'ę',
        'š': 'š',
        'û': 'ų',   
        'è': 'ė',
        'é': 'ė',
        'ü': 'ū',
    }

    for incorrect, correct in replacements.items():
        text = text.replace(incorrect, correct)
    words = word_tokenize(text)
    filtered_words = [word for word in words if word.lower() not in stopwords.words('lithuanian')]

    text = ' '.join(filtered_words)
    filtered_words = [word for word in words if word.lower() not in set(string.punctuation)]
    text = ' '.join(filtered_words)
    text = text.replace('.', " ")

    stop_words = spacy.lang.lt.stop_words.STOP_WORDS  # Replace 'xx' with 'en' or 'lt'
    doc = nlp_lt(text)
    filtered_tokens = [token.text.lower() for token in doc if token.text.lower() not in stop_words]

    text = ' '.join(filtered_tokens)


    return text
    
def get_vector(word, language):
    # Get word vector based on language
    if language == 'en':
        return english_model.get_word_vector(word)
    elif language == 'lt':
        return lithuanian_model.get_word_vector(word)
    else:
        raise ValueError("Unsupported language. Use 'en' for English or 'lt' for Lithuanian.")

def process_text(text, language):
    if language == 'en':
        return nlp_en(text)
    elif language == 'lt':
        return nlp_lt(text)
    else:
        raise ValueError(f"Unsupported language: {language}")

def calculate_similarity_matrix(strings):
    num_strings = len(strings)
    similarity_matrix = [[0.0] * num_strings for _ in range(num_strings)]

    for i in range(num_strings):
        for j in range(i + 1, num_strings):
            text1 = strings[i]
            text2 = strings[j]

            # Detect language for each text
            lang1, _ = langid.classify(text1)
            lang2, _ = langid.classify(text2)

            # Process texts using the appropriate spaCy model
            doc1 = process_text(text1, lang1)
            doc2 = process_text(text2, lang2)

            # Calculate cosine similarity between the vectors
            similarity_score = cosine_similarity(doc1.vector.reshape(1, -1), doc2.vector.reshape(1, -1))[0][0]

            similarity_matrix[i][j] = similarity_score
            similarity_matrix[j][i] = similarity_score

    return similarity_matrix

def calculate_similarity(text1, text2):

    lang1, _ = langid.classify(text1)
    lang2, _ = langid.classify(text2)
    lang1, _ = langid.classify(text1)
    lang2, _ = langid.classify(text2)

    # Process texts using the appropriate spaCy model
    if lang1 == 'en':
        doc1 = nlp_en(text1)
    elif lang1 == 'lt':
        doc1 = nlp_lt(text1)
    else:
        raise ValueError(f"Unsupported language: {lang1}")

    if lang2 == 'en':
        doc2 = nlp_en(text2)
    elif lang2 == 'lt':
        doc2 = nlp_lt(text2)
    else:
        raise ValueError(f"Unsupported language: {lang2}")

    # Calculate cosine similarity between the vectors
    similarity_score = cosine_similarity(doc1.vector.reshape(1, -1), doc2.vector.reshape(1, -1))[0][0]
    return similarity_score

def extract_technical_subjects(strings, similarity_matrix, threshold=0.7):
    num_strings = len(strings)
    technical_subjects = {}

    for i in range(num_strings):
        for j in range(i + 1, num_strings):
            similarity_score = similarity_matrix[i][j]

            if similarity_score > threshold:
                # Detect language for each text
                lang_i, _ = langid.classify(strings[i])
                lang_j, _ = langid.classify(strings[j])

                # Process texts using the appropriate spaCy model
                doc_i = process_text(strings[i], lang_i)
                doc_j = process_text(strings[j], lang_j)

                # Extract nouns from both texts
                nouns_i = {token.text.lower() for token in doc_i if token.pos_ == 'NOUN'}
                nouns_j = {token.text.lower() for token in doc_j if token.pos_ == 'NOUN'}

                # Find common technical terms
                common_terms = nouns_i.intersection(nouns_j)

                # Update the dictionary of technical subjects
                if common_terms:
                    key = f"{i}-{j}"
                    technical_subjects[key] = common_terms

    return technical_subjects

def remove_conjoined_words(text):
    # Use a regular expression to find and remove conjoined words
    cleaned_text = re.sub(r'([a-z])([A-Z])', r'\1 \2', text)
    
    return cleaned_text


def contains_digit(element):
    if isinstance(element, str):
        return any(char.isdigit() for char in element)
    return False
    
def contains_regex_pattern(main_string, regex_pattern):
    return bool(re.search(regex_pattern, main_string))

def remove_word_from_boundary(original_string, word_to_remove):
    pattern = r'\b' + re.escape(word_to_remove) + r'\b'
    return re.sub(pattern, '', original_string)

def simplify_string(input_string):
    cleaned_string = re.sub(r"'(\d*)", '', input_string)
    cleaned_string = re.sub(r"\",\"", '', cleaned_string)
    cleaned_string = re.sub(r"\",", '', cleaned_string)
    cleaned_string = re.sub(r",\"", '', cleaned_string)
    cleaned_string = re.sub(r"\"", '', cleaned_string)
    cleaned_string = re.sub(r"\.\.", '', cleaned_string)
    
    cleaned_string = cleaned_string.strip()
    
    return cleaned_string


def detect_language(text):
    try:
        language = detect(text)
        return language
    except Exception as e:
        return None

def aggregate_info(file):
    csv_names = sorted([f for f in os.listdir(file) if os.path.isfile(os.path.join(file, f))],  key=extract_number)
    first_detect = True

    result_str = ""
    outside_loop_continue = False
    pattern = re.compile(r"'[0-9]+\.")

    print("a")
    for file_csv in csv_names:
        file_csv = file + "/" + file_csv
        with open(file_csv, newline='', encoding='utf-8') as csvfile:
        # Create a CSV DictReader

            for row in csvfile:
                if first_detect:
                    lang = detect_language(row)
                    first_detect = False
                # print(lang != detect_language(row) + lang + detect_language(row))
                if lang != detect_language(row) and (detect_language(row) == "lt" or detect_language(row) == "en"):
                    # print(result_str)
                    continue
                # print(pattern.search(row))
                # print(contains_en)
                if  row.find("Purpose ") != -1 or \
                    pattern.search(row) != None or \
                    row.find("Contact\",\"\'hours") != -1 or \
                    row.find("Kontaktinio") != -1 or \
                    row.find("Dalyko (modulio) tikslas:" ) != -1  or \
                    pattern.search(row) != None:
                        outside_loop_continue = True
                break
            if outside_loop_continue:
                for row in csvfile:
                    if ",," in row or row == "," or "Confidence Scores " in row:
                        break 
                    result_str += " " + "".join(map(str, row)) + "\n"
                    result_str = simplify_string(result_str)
                    result_str = remove_word_from_boundary(result_str, "nan")
                    result_str = fix_encoding(result_str,file)
                    result_str = remove_conjoined_words(result_str)
                outside_loop_continue = False
                result_str = re.sub(r'\b(\d+)\.0\b', '', result_str)
                result_str = re.sub(r'Literatūros', '', result_str)
                result_str = re.sub(r'Egzaminas', '', result_str)
                result_str = re.sub(r'Pasiruosimas', '', result_str)
                result_str = re.sub(r'Literaturos', '', result_str)
                result_str = re.sub(r'literatūros', '', result_str)
                result_str = re.sub(r'klausimus', '', result_str)
                result_str = re.sub(r'kartojimas', '', result_str)

    return result_str
result_strings = []
for name in folder_names: 
    lmao = aggregate_info(directory_path + name)
    # print(lmao)
    result_strings.append(lmao)
    # print("\n NEXT FILE\n")

for i in result_strings:
    print(i)
for i in range(len(result_strings) - 1):
    for j in range(i + 1, len(result_strings)):
        similarity_score = calculate_similarity(result_strings[i], result_strings[j])
        print(f"Similarity between the two texts: {similarity_score}")

similarity_matrix = calculate_similarity_matrix(result_strings)
for row in similarity_matrix:
    print(row)

threshold = 0.6
subjects = extract_technical_subjects(result_strings, similarity_matrix, threshold)
for key, common_terms in subjects.items():
    i, j = map(int, key.split('-'))
    print(f"Subjects in texts {folder_names[i]} and {folder_names[j]}: {', '.join(common_terms)}")
