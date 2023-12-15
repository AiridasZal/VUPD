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

import com.example.helloworld.models.Balsai;
import com.example.helloworld.services.BalsaiService;

@CrossOrigin
@RestController
@RequestMapping("/balsai")
public class BalsaiResource {

    @Autowired
    private BalsaiService balsaiService;

    @PostMapping("/addbalsai")
    public Balsai addBalsai(@RequestBody final Balsai balsai) {
        return balsaiService.addBalsai(balsai);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Balsai>> visiBalsai() {
        List<Balsai> balsai = balsaiService.visiBalsai();
        return new ResponseEntity<>(balsai, HttpStatus.OK);
    }

    @GetMapping("/{courseid}")
    public ResponseEntity<List<Balsai>> balsaiCourse(@PathVariable("courseid") final String courseid) {
        List<Balsai> balsaiList = balsaiService.balsaiCourse(courseid);
        return new ResponseEntity<>(balsaiList, HttpStatus.OK);
    }

    @GetMapping("/{courseid}/{categoryid}")
    public ResponseEntity<List<Balsai>> balsaiCategory(@PathVariable("courseid") final String courseid, @PathVariable("categoryid") final String categoryid) {
        List<Balsai> balsaiList = balsaiService.balsaiCategory(courseid, categoryid);
        return new ResponseEntity<>(balsaiList, HttpStatus.OK);
    }
}
