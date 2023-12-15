package com.example.helloworld.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.helloworld.models.Programa;
import com.example.helloworld.services.ProgramaService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/programos")
public class ProgramaResource {
    
    @Autowired
    ProgramaService programaService;

    @PostMapping("/add")
    public Programa addPrograma(@RequestBody final Programa programa) {
        return programaService.addPrograma(programa);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Programa>> visosProgramos() {
        List<Programa> programos = programaService.visosProgramos();
        return new ResponseEntity<>(programos, HttpStatus.OK);
    }

    @GetMapping("/{facultyid}")
    public ResponseEntity<List<Programa>> programaByFakultetas(@PathVariable("facultyid") final String facultyid) {
        List<Programa> programos = programaService.programosFaculty(facultyid);
        return new ResponseEntity<>(programos, HttpStatus.OK);
    }
}
