package com.example.helloworld.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "Balsai")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Balsai {

    @Id

    private String id;

    private String courseid;

    private String categoryid;

    private String userid;

    private int rating;
}
