package com.example.helloworld.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "Atsiliepimai")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Atsiliepimai {

    @Id

    private String id;

    private String courseid;

    private String userid;

    private String review;

    private int upvotes;

    private int downvotes;
}

