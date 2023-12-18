package com.example.helloworld.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "votes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Vote {

    @Id

    private String id;

    private String courseId;

    private String categoryId;

    private String userId;

    private int rating;
}
