package com.example.helloworld.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.helloworld.models.Report;
import com.example.helloworld.repositories.ReportRepository;
import com.example.helloworld.repositories.ReviewsRepository;
import com.example.helloworld.utils.SecurityUtils;
import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.dto.ReportDetailsDTO;
import com.example.helloworld.models.Review;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReportService {

    @Autowired
    private ReportRepository reportRepository;
    
    @Autowired
    private ReviewsRepository reviewsRepository;

    public Report reportReview(String reviewId, String reason) {
        String reportedByUserId = SecurityUtils.getCurrentUserId();
        Report report = new Report(null, reviewId, reportedByUserId, reason, LocalDateTime.now(), false);
        return reportRepository.save(report);
    }

    public List<ReportDetailsDTO> getAllReportsWithDetails() {
    List<Report> reports = reportRepository.findAll();

    List<ReportDetailsDTO> filteredReports = reports.stream()
            .filter(report -> !report.isResolved())
            .map(report -> {
                Review review = reviewsRepository.findById(report.getReviewId())
                        .orElseThrow(() -> new NotFoundException("Review not found"));
                return new ReportDetailsDTO(report, review);
            })
            .collect(Collectors.toList());

    return filteredReports;
}

    public Report resolveReport(String reportId, String resolutionNote) {
        Report report = reportRepository.findById(reportId)
                .orElseThrow(() -> new NotFoundException("Report not found"));
        report.setResolved(true);
        return reportRepository.save(report);
    }

    public void deleteReview(String reviewId) {
        reviewsRepository.deleteById(reviewId);
    }
}
