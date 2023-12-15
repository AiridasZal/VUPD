package com.example.helloworld.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.helloworld.models.Programa;

public interface ProgramaRepo extends MongoRepository<Programa, String> {

    @Query("{ 'facultyid' : ?0 }")
    List<Programa> findByFacultyId(String facultyid);
}
