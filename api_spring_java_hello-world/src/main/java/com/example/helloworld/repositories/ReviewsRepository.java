package com.example.helloworld.repositories;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.example.helloworld.models.Review;

public interface ReviewsRepository extends MongoRepository<Review, String> {
    @Query("{ 'courseId' : ?0 }")
    List<Review> findByCourseId(String courseId);

    Review findByCourseIdAndUserId(String courseId, String userId);
}
