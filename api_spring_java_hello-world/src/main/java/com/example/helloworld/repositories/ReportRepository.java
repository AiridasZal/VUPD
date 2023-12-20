package com.example.helloworld.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.helloworld.models.Report;

public interface ReportRepository extends MongoRepository<Report, String> {
    
}
