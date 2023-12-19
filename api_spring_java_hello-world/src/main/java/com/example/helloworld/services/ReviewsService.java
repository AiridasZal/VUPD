package com.example.helloworld.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.models.Review;
import com.example.helloworld.repositories.ReviewsRepository;
import com.example.helloworld.exceptions.AlreadyExistsException;
import com.example.helloworld.exceptions.UnauthorizedException;

@Service
public class ReviewsService {

    @Autowired
    private ReviewsRepository reviewsRepository;

    public Review addReview(final Review review) {
        Review existingReview = reviewsRepository.findByCourseIdAndUserId(review.getCourseId(), review.getUserId());
        if (existingReview != null) {
            throw new AlreadyExistsException("Review already exists for this course by the user");
        }
        return reviewsRepository.save(review);
    }

    public List<Review> getAllReviews() {
        return reviewsRepository.findAll();
    }

    public List<Review> getReviewsByCourse(final String courseId) {
        List<Review> reviews = reviewsRepository.findByCourseId(courseId);
        if (reviews.isEmpty()) {
            throw new NotFoundException("No reviews found for courseId: " + courseId);
        }
        return reviews;
    }

    public Review upvoteReview(String reviewId, String userId) {
        Review review = reviewsRepository.findById(reviewId).orElseThrow(() -> new NotFoundException("Review not found"));
        
        if (review.getDownvotedBy().contains(userId)) {
            review.getDownvotedBy().remove(userId);
            review.setDownvotes(review.getDownvotes() - 1);
        }

        if (!review.getUpvotedBy().contains(userId)) {
            review.getUpvotedBy().add(userId);
            review.setUpvotes(review.getUpvotes() + 1);
        }

        return reviewsRepository.save(review);
    }

    public Review downvoteReview(String reviewId, String userId) {
        Review review = reviewsRepository.findById(reviewId).orElseThrow(() -> new NotFoundException("Review not found"));
        
        if (review.getUpvotedBy().contains(userId)) {
            review.getUpvotedBy().remove(userId);
            review.setUpvotes(review.getUpvotes() - 1);
        }

        if (!review.getDownvotedBy().contains(userId)) {
            review.getDownvotedBy().add(userId);
            review.setDownvotes(review.getDownvotes() + 1);
        }

        return reviewsRepository.save(review);
    }

    public Review updateReview(String reviewId, Review updatedReview, String userId) {
        Review existingReview = reviewsRepository.findById(reviewId).orElseThrow(() -> new NotFoundException("Review not found"));
        if (!existingReview.getUserId().equals(userId)) {
            throw new UnauthorizedException("User is not authorized to update this review");
        }
        existingReview.setReview(updatedReview.getReview());
        existingReview.setRatings(updatedReview.getRatings());
        return reviewsRepository.save(existingReview);
    }

    public void deleteReview(String reviewId, String userId) {
        Review review = reviewsRepository.findById(reviewId).orElseThrow(() -> new NotFoundException("Review not found"));
        if (!review.getUserId().equals(userId)) {
            throw new UnauthorizedException("User is not authorized to delete this review");
        }
        reviewsRepository.deleteById(reviewId);
    }

    public Review findReviewByCourseAndUser(String courseId, String userId) {
        return reviewsRepository.findByCourseIdAndUserId(courseId, userId);
    }
}
