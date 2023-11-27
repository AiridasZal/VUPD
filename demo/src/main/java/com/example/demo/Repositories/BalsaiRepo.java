package com.example.demo.Repositories;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.Entities.Balsai;

public interface BalsaiRepo extends MongoRepository<Balsai, String> {

    @Query("SELECT b FROM Balsai b WHERE b.courseid = :courseid")
    List<Balsai> findByCourseId(String courseid);
}
