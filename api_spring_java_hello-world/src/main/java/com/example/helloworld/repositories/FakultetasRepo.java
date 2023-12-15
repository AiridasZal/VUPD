package com.example.helloworld.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.helloworld.models.Fakultetas;

public interface FakultetasRepo extends MongoRepository<Fakultetas, String> {
    
}
