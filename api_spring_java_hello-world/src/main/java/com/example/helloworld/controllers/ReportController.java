package com.example.helloworld.controllers;

import com.example.helloworld.models.Report;
import com.example.helloworld.services.ReportService;
import com.example.helloworld.dto.ReportDetailsDTO;


import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @PostMapping("/report-review/{reviewId}")
    public Report reportReview(@PathVariable String reviewId, @RequestBody String reason) {
        return reportService.reportReview(reviewId, reason);
    }

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('read:admin-messages')")
    public ResponseEntity<List<ReportDetailsDTO>> getAllReportsWithDetails() {
        List<ReportDetailsDTO> reports = reportService.getAllReportsWithDetails();
        return ResponseEntity.ok(reports);
    }

    @PostMapping("/resolve/{reportId}")
    @PreAuthorize("hasAuthority('read:admin-messages')")
    public Report resolveReport(@PathVariable String reportId, @RequestBody String resolutionNote) {
        return reportService.resolveReport(reportId, resolutionNote);
    }

    @DeleteMapping("/delete-review/{reviewId}")
    @PreAuthorize("hasAuthority('read:admin-messages')")
    public ResponseEntity<?> deleteReview(@PathVariable String reviewId) {
        reportService.deleteReview(reviewId);
        return ResponseEntity.ok().build();
    }
}