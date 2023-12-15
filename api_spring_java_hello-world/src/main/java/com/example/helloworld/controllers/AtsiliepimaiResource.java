package com.example.helloworld.controllers;

import java.util.List;

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

import com.example.helloworld.models.Atsiliepimai;
import com.example.helloworld.services.AtsiliepimaiService;

@CrossOrigin
@RestController
@RequestMapping("/atsiliepimai")
public class AtsiliepimaiResource {

    @Autowired
    private AtsiliepimaiService atsiliepimaiService;

    @PostMapping("/add")
    public Atsiliepimai addAtsiliepimai(@RequestBody final Atsiliepimai atsiliepimai) {
        return atsiliepimaiService.addAtsiliepimai(atsiliepimai);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Atsiliepimai>> visiAtsiliepimai() {
        List<Atsiliepimai> atsiliepimai = atsiliepimaiService.visiAtsiliepimai();
        return new ResponseEntity<>(atsiliepimai, HttpStatus.OK);
    }

    @GetMapping("/{courseid}")
    public ResponseEntity<List<Atsiliepimai>> atsiliepimaiCourse(@PathVariable("courseid") final String courseid) {
        List<Atsiliepimai> atsiliepimaiList = atsiliepimaiService.atsiliepimaiCourse(courseid);
        return new ResponseEntity<>(atsiliepimaiList, HttpStatus.OK);
    }
}
