package com.example.helloworld.repositories;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.example.helloworld.models.Course;

public interface CoursesRepository extends MongoRepository<Course, String> {

    @Query("{ 'facultyId' : ?0 }")
    List<Course> findByFacultyId(String facultyId);
}
