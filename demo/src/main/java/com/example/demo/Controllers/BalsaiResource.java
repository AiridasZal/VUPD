package com.example.demo.Controllers;

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

import com.example.demo.Services.BalsaiService;
import com.example.demo.Entities.Balsai;

@CrossOrigin
@RestController
@RequestMapping("/balsai")
public class BalsaiResource {
    @Autowired
    BalsaiService balsaiService;
    @PostMapping("/addbalsai")
    public Balsai addBalsai (@RequestBody Balsai balsai){
        return balsaiService.addBalsai(balsai);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Balsai>> VisiBalsai(){
        List<Balsai> balsai = balsaiService.visiBalsai();
        return new ResponseEntity<>(balsai, HttpStatus.OK);
    }
    @GetMapping("/{courseid}")
    public ResponseEntity<List<Balsai>> BalsaiCourse (@PathVariable("courseid") String courseid){
        List<Balsai> balsailist = balsaiService.balsaiCourse(courseid);
        return new ResponseEntity<>(balsailist, HttpStatus.OK);
    }
}
