package com.example.helloworld.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.helloworld.models.Subject;
import com.example.helloworld.services.SubjectsService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/subjects")
public class SubjectsController {

    @Autowired
    private SubjectsService subjectsService;

    @PostMapping("/add")
    public Subject addSubject(@RequestBody final Subject subject) {
        return subjectsService.addSubject(subject);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Subject>> getAllSubjects() {
        List<Subject> subjects = subjectsService.getAllSubjects();
        return new ResponseEntity<>(subjects, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Subject>> getSubjectsByCourse(@PathVariable("id") final String courseId) {
        List<Subject> subjectList = subjectsService.getSubjectsByCourse(courseId);
        return new ResponseEntity<>(subjectList, HttpStatus.OK);
    }

    @GetMapping("/{faculty}/{course}/{year}")
    public ResponseEntity<List<Subject>> getSubjectsByYear(@PathVariable("faculty") final String faculty, @PathVariable("course") final String course, @PathVariable("year") final int year) {
        List<Subject> subjectList = subjectsService.getSubjectsByYear(faculty, course, year);
        return new ResponseEntity<>(subjectList, HttpStatus.OK);
    }

    @GetMapping("/{faculty}/{course}/{year}/{id}")
    public ResponseEntity<List<Subject>> getSubjectById(@PathVariable("faculty") final String faculty, @PathVariable("course") final String course, @PathVariable("year") final int year, @PathVariable("id") final String id) {
        List<Subject> subjectList = subjectsService.getSubjectById(faculty, course, year, id);
        return new ResponseEntity<>(subjectList, HttpStatus.OK);
    }
}
