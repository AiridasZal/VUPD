package com.example.helloworld.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.helloworld.models.Fakultetas;
import com.example.helloworld.services.FakultetasService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/fakultetai")
public class FakultetasResource {
    
    @Autowired
    FakultetasService fakultetasService;

    @PostMapping("/add")
    public Fakultetas addFakultetas(@RequestBody final Fakultetas fakultetas) {
        return fakultetasService.addFakultetas(fakultetas);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Fakultetas>> visiFakultetai() {
        List<Fakultetas> fakultetai = fakultetasService.visiFakultetai();
        return new ResponseEntity<>(fakultetai, HttpStatus.OK);
    }
}
