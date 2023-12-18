package com.example.helloworld.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.models.Review;
import com.example.helloworld.repositories.ReviewsRepository;

@Service
public class ReviewsService {

    @Autowired
    private ReviewsRepository reviewsRepository;
    
    public Review addReview(final Review review) {
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
}
