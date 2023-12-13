package com.example.helloworld.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.helloworld.models.Note;

public interface NoteRepository extends MongoRepository<Note, String> {
}
