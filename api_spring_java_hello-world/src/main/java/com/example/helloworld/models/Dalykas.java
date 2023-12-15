package com.example.helloworld.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "Dalykas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Dalykas {

    @Id

    private String id;

    private String faculty;

    private String program;

    private int year;

    private String name;

    private int credits;

    private int hours;

    private String language;

    private String lecturer;

    private String summary;

    private String link;
}
