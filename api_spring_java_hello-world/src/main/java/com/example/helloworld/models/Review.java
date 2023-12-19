package com.example.helloworld.models;

import java.util.Map;
import java.util.Set;
import java.util.HashSet;
import java.time.LocalDateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.CreatedDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "reviews")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @Id
    private String id;

    private String courseId;

    private String userId;

    private String review;

    private int upvotes;

    private int downvotes;

    private Map<String, Integer> ratings;

    private Set<String> upvotedBy = new HashSet<>();

    private Set<String> downvotedBy = new HashSet<>();

    @CreatedDate
    private LocalDateTime createdAt;
}
