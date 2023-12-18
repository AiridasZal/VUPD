package com.example.helloworld.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.helloworld.models.Faculty;

public interface FacultiesRepository extends MongoRepository<Faculty, String> {

}
