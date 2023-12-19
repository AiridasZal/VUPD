package com.example.helloworld.models;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "subjects")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Subject {

    @Id

    private String id;

    private String faculty;

    private String course;

    private int year;

    private int semester;

    private String name;

    private String slug;

    private int credits;

    private String language;

    private List<String> lecturers;

    private List<String> lecturerEmails;

    private String summary;

    private String link;
}
