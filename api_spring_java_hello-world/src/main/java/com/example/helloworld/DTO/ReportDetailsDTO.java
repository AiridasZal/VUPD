package com.example.helloworld.dto;

import com.example.helloworld.models.Report;
import com.example.helloworld.models.Review;

import java.time.LocalDateTime;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReportDetailsDTO {
    private Report report;
    private Review review;
}