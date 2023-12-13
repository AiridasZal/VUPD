package com.example.helloworld.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Note {
    @Id
    private String id;

    private String content;

    public Note() {
    }

    public Note(final String content) {
        this.content = content;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(final String content) {
        this.content = content;
    }
}
