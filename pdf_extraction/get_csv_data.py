import boto3
import os
import time
import pandas as pd
import zipfile
import subprocess
import glob

directory_path = os.getcwd() + "/zip/"

file_names =[f for f in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, f))]

def remove_zip_extension(file_path):
    # Split the file path into the root and extension
    root, extension = os.path.splitext(file_path)

    # Check if the extension is ".zip" and remove it
    if extension.lower() == '.zip':
        new_file_path = root
        return new_file_path
    else:
        # The file doesn't have a ".zip" extension
        return file_path

def is_string_in_file(file_path, target_string):
    try:
        with open(file_path, 'r') as file:
            file_content = file.read()
            return target_string in file_content
    except FileNotFoundError:
        print(f"The file '{file_path}' does not exist.")
        return False
    except Exception as e:
        print(f"An error occurred: {e}")
        return False


def extract_all_from_zip(zip_file_path, extract_to_path):
    with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
        zip_ref.extractall(extract_to_path)

def main():
    file_names = [f for f in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, f))]

    bucket_name = 'textcraft'
    pdf_file_path = 'path/to/your/pdf/file.pdf'
    document_name = 'your-pdf-document-name.pdf'


    job_id = []
    for file in file_names:
        extract_all_from_zip(directory_path + file,  os.getcwd() +"/csv/" + remove_zip_extension(file))
        pattern = os.path.join(os.getcwd() +"/csv/" + remove_zip_extension(file), '*.json')
        json_files = glob.glob(pattern)
        for file_path in json_files:
            try:
                os.remove(file_path)
            except Exception as e:
                print(f"Error deleting {file_path}: {e}")
main()