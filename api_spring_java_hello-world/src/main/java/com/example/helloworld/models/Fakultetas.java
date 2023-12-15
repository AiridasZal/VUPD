package com.example.helloworld.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "Fakultetas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Fakultetas {

    @Id

    private String id;

    private String name;

    private String slug;
}
