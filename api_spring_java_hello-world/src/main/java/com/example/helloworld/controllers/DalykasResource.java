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

import com.example.helloworld.models.Dalykas;
import com.example.helloworld.services.DalykasService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/kursai")
public class DalykasResource {

    @Autowired
    private DalykasService kursasService;

    @PostMapping("/add")
    public Dalykas addKursas(@RequestBody final Dalykas kursas) {
        return kursasService.addKursas(kursas);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Dalykas>> visiKursas() {
        List<Dalykas> kursas = kursasService.visiKursai();
        return new ResponseEntity<>(kursas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Dalykas>> kursasCourse(@PathVariable("id") final String courseid) {
        List<Dalykas> kursasList = kursasService.kursasCourse(courseid);
        return new ResponseEntity<>(kursasList, HttpStatus.OK);
    }

    @GetMapping("/{faculty}/{program}/{year}")
    public ResponseEntity<List<Dalykas>> kursasYear(@PathVariable("faculty") final String faculty, @PathVariable("program") final String program, @PathVariable("year") final int year) {
        List<Dalykas> kursasList = kursasService.kursasYear(faculty, program, year);
        return new ResponseEntity<>(kursasList, HttpStatus.OK);
    }

        @GetMapping("/{faculty}/{program}/{year}/{id}")
    public ResponseEntity<List<Dalykas>> kursasId(@PathVariable("faculty") final String faculty, @PathVariable("program") final String program, @PathVariable("year") final int year, final String id) {
        List<Dalykas> kursasList = kursasService.kursasId(faculty, program, year, id);
        return new ResponseEntity<>(kursasList, HttpStatus.OK);
    }
}
