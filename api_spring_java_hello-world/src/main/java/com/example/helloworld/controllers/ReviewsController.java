package com.example.helloworld.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.helloworld.models.Review;
import com.example.helloworld.services.ReviewsService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/reviews")
public class ReviewsController {

    @Autowired
    private ReviewsService reviewsService;

    @PostMapping("/add")
    public Review addReview(@RequestBody final Review review) {
        return reviewsService.addReview(review);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Review>> getAllReviews() {
        List<Review> reviews = reviewsService.getAllReviews();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<List<Review>> getReviewsByCourse(@PathVariable("courseId") final String courseId) {
        List<Review> reviewList = reviewsService.getReviewsByCourse(courseId);
        return new ResponseEntity<>(reviewList, HttpStatus.OK);
    }
}
