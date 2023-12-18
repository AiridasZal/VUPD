package com.example.helloworld.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.helloworld.models.Vote;
import com.example.helloworld.services.VotesService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/votes")
public class VotesController {

    @Autowired
    private VotesService votesService;

    @PostMapping("/add")
    public Vote addVote(@RequestBody final Vote vote) {
        return votesService.addVote(vote);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Vote>> getAllVotes() {
        List<Vote> votes = votesService.getAllVotes();
        return new ResponseEntity<>(votes, HttpStatus.OK);
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<List<Vote>> getVotesByCourse(@PathVariable("courseId") final String courseId) {
        List<Vote> voteList = votesService.getVotesByCourse(courseId);
        return new ResponseEntity<>(voteList, HttpStatus.OK);
    }

    @GetMapping("/{courseId}/{categoryId}")
    public ResponseEntity<List<Vote>> getVotesByCategory(@PathVariable("courseId") final String courseId, @PathVariable("categoryId") final String categoryId) {
        List<Vote> voteList = votesService.getVotesByCategory(courseId, categoryId);
        return new ResponseEntity<>(voteList, HttpStatus.OK);
    }
}
