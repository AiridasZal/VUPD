package com.example.helloworld.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.helloworld.models.Atsiliepimai;

public interface AtsiliepimaiRepo extends MongoRepository<Atsiliepimai, String> {

    @Query("{ 'courseid' : ?0 }")
    List<Atsiliepimai> findByCourseId(String courseid);
}
