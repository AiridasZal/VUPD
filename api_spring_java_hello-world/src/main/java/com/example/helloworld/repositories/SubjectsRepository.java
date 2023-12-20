package com.example.helloworld.repositories;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.example.helloworld.models.Subject;

public interface SubjectsRepository extends MongoRepository<Subject, String> {

    @Query("{ 'id' : ?0 }")
    List<Subject> findByCourseId(String id);

    @Query("{ 'faculty' : ?0, 'course' : ?1, 'year' : ?2 }")
    List<Subject> findByYear(String faculty, String course, int year);

    @Query("{ 'faculty' : ?0, 'course' : ?1, 'year' : ?2, 'id' : ?3 }")
    List<Subject> findById(String faculty, String course, int year, String id);
}
