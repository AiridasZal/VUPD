package com.example.helloworld.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "reports")
public class Report {

    @Id
    private String id;

    private String reviewId;

    private String reportedByUserId;

    private String reason;

    private LocalDateTime reportedAt = LocalDateTime.now();

    private boolean resolved = false;
}
