package com.example.helloworld.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.helloworld.models.Course;
import com.example.helloworld.services.CoursesService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/courses")
public class CoursesController {

    @Autowired
    private CoursesService coursesService;

    @PostMapping("/add")
    public Course addCourse(@RequestBody final Course course) {
        return coursesService.addCourse(course);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = coursesService.getAllCourses();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

    @GetMapping("/{facultyId}")
    public ResponseEntity<List<Course>> getCoursesByFaculty(@PathVariable("facultyId") final String facultyId) {
        List<Course> courses = coursesService.getCoursesByFaculty(facultyId);
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }
}