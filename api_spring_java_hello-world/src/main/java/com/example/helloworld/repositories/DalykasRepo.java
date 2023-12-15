package com.example.helloworld.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.helloworld.models.Dalykas;

public interface DalykasRepo extends MongoRepository<Dalykas, String> {

    @Query("{ 'id' : ?0 }")
    List<Dalykas> findByCourseId(String id);

    @Query("{ 'faculty' : ?0, 'program' : ?1, 'year' : ?2 }")
    List<Dalykas> findByYear(String faculty, String program, int year);

    @Query("{ 'faculty' : ?0, 'program' : ?1, 'year' : ?2, 'id' : ?3 }")
    List<Dalykas> findById(String faculty, String program, int year, String id);
}
