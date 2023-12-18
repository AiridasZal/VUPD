package com.example.helloworld.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.models.Subject;
import com.example.helloworld.repositories.SubjectsRepository;

@Service
public class SubjectsService {

    @Autowired
    private SubjectsRepository subjectsRepository;

    public Subject addSubject(final Subject subject) {
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
        if (subjects.isEmpty()) {
            throw new NotFoundException("No subjects found for faculty: " + faculty + ", course: " + course + ", year: " + year);
        }
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
