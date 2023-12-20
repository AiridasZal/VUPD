package com.example.helloworld.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.helloworld.models.Faculty;
import com.example.helloworld.services.FacultiesService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/faculties")
public class FacultiesController {

    @Autowired
    private FacultiesService facultiesService;

    @PostMapping("/add")
    public Faculty addFaculty(@RequestBody final Faculty faculty) {
        return facultiesService.addFaculty(faculty);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Faculty>> getAllFaculties() {
        List<Faculty> faculties = facultiesService.getAllFaculties();
        return new ResponseEntity<>(faculties, HttpStatus.OK);
    }
}
