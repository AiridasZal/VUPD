package com.example.helloworld.services;

import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;
import java.text.Normalizer;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.models.Subject;
import com.example.helloworld.repositories.SubjectsRepository;

@Service
public class SubjectsService {

    @Autowired
    private SubjectsRepository subjectsRepository;

    private String normalizeLithuanian(String name) {
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        String accentRemoved = normalized.replaceAll("\\p{M}", "");
        
        Map<Character, Character> lithuanianToEnglishMap = new HashMap<>();
        lithuanianToEnglishMap.put('ą', 'a');
        lithuanianToEnglishMap.put('č', 'c');
        lithuanianToEnglishMap.put('ę', 'e');
        lithuanianToEnglishMap.put('ė', 'e');
        lithuanianToEnglishMap.put('į', 'i');
        lithuanianToEnglishMap.put('š', 's');
        lithuanianToEnglishMap.put('ų', 'u');
        lithuanianToEnglishMap.put('ū', 'u');
        lithuanianToEnglishMap.put('ž', 'z');

        StringBuilder sb = new StringBuilder();
        for (char c : accentRemoved.toCharArray()) {
            sb.append(lithuanianToEnglishMap.getOrDefault(c, c));
        }
        return sb.toString();
    }

    private List<String> generateLecturerEmails(String facultySlug, List<String> lecturerNames) {
        return lecturerNames.stream()
                     .map(name -> name.substring(name.lastIndexOf('.') + 1).trim())
                     .map(this::normalizeLithuanian)
                     .map(name -> {
                         String[] splitName = name.split(" ");
                         String firstName = splitName[0];
                         String lastName = splitName.length > 1 ? splitName[splitName.length - 1] : "";
                         return firstName.toLowerCase() + "." + lastName.toLowerCase() + "@" + facultySlug + ".vu.lt";
                     })
                     .collect(Collectors.toList());
    }

    public Subject addSubject(final Subject subject) {
        subject.setLecturerEmails(generateLecturerEmails(subject.getFaculty(), subject.getLecturers()));
        return subjectsRepository.save(subject);
    }

    public List<Subject> getAllSubjects() {
        return subjectsRepository.findAll();
    }

    public List<Subject> getSubjectsByCourse(final String id) {
        List<Subject> subjects = subjectsRepository.findByCourseId(id);
        if (subjects.isEmpty()) {
            throw new NotFoundException("No subjects found for id: " + id);
        }
        return subjects;
    }

    public List<Subject> getSubjectsByYear(final String faculty, final String course, final int year) {
        List<Subject> subjects = subjectsRepository.findByYear(faculty, course, year);
        return subjects;
    }

    public List<Subject> getSubjectById(final String faculty, final String course, final int year, final String id) {
        List<Subject> subjects = subjectsRepository.findById(faculty, course, year, id);
        if (subjects.isEmpty()) {
            throw new NotFoundException("No subjects found for faculty: " + faculty + ", course: " + course + ", year: " + year + ", id: " + id);
        }
        return subjects;
    }
}
