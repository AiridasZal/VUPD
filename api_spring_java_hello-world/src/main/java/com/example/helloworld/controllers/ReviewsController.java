package com.example.helloworld.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.helloworld.models.Review;
import com.example.helloworld.services.ReviewsService;
import com.example.helloworld.utils.SecurityUtils;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/reviews")
public class ReviewsController {

    @Autowired
    private ReviewsService reviewsService;

    @PostMapping("/add")
    public ResponseEntity<Review> addReview(@RequestBody final Review review) {
        String userId = SecurityUtils.getCurrentUserId();
        review.setUserId(userId);
        Review savedReview = reviewsService.addReview(review);
        return new ResponseEntity<>(savedReview, HttpStatus.CREATED);
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

    @PutMapping("/{reviewId}")
    public ResponseEntity<Review> updateReview(@PathVariable String reviewId, @RequestBody Review review) {
        String userId = SecurityUtils.getCurrentUserId();
        Review updatedReview = reviewsService.updateReview(reviewId, review, userId);
        return new ResponseEntity<>(updatedReview, HttpStatus.OK);
    }

    @DeleteMapping("/{reviewId}")
    public ResponseEntity<?> deleteReview(@PathVariable String reviewId) {
        String userId = SecurityUtils.getCurrentUserId();
        reviewsService.deleteReview(reviewId, userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/vote/{reviewId}")
    public ResponseEntity<Review> voteReview(@PathVariable String reviewId, @RequestParam boolean upvote, @RequestBody String userId) {
        Review votedReview = upvote ? reviewsService.upvoteReview(reviewId, userId) : reviewsService.downvoteReview(reviewId, userId);
        return new ResponseEntity<>(votedReview, HttpStatus.OK);
    }
}
