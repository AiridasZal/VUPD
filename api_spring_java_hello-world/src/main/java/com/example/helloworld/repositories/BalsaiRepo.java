package com.example.helloworld.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.helloworld.models.Balsai;

public interface BalsaiRepo extends MongoRepository<Balsai, String> {

    @Query("{ 'courseid' : ?0 }")
    List<Balsai> findByCourseId(String courseid);

    @Query("{ 'courseid' : ?0, 'categoryid' : ?1 }")
    List<Balsai> findByCategoryId(String courseid, String categoryid);
}
