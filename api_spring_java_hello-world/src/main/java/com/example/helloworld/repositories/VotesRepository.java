package com.example.helloworld.repositories;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.example.helloworld.models.Vote;

public interface VotesRepository extends MongoRepository<Vote, String> {

    @Query("{ 'courseId' : ?0 }")
    List<Vote> findByCourseId(String courseId);

    @Query("{ 'courseId' : ?0, 'categoryId' : ?1 }")
    List<Vote> findByCategoryId(String courseId, String categoryId);
}
