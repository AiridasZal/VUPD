package com.example.helloworld.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.models.Vote;
import com.example.helloworld.repositories.VotesRepository;

@Service
public class VotesService {

    @Autowired
    private VotesRepository votesRepository;

    public Vote addVote(final Vote vote) {
        return votesRepository.save(vote);
    }

    public List<Vote> getAllVotes() {
        return votesRepository.findAll();
    }

    public List<Vote> getVotesByCourse(final String courseId) {
        List<Vote> votes = votesRepository.findByCourseId(courseId);
        if (votes.isEmpty()) {
            throw new NotFoundException("No votes found for courseId: " + courseId);
        }
        return votes;
    }

    public List<Vote> getVotesByCategory(final String courseId, final String categoryId) {
        List<Vote> votes = votesRepository.findByCategoryId(courseId, categoryId);
        if (votes.isEmpty()) {
            throw new NotFoundException("No votes found for courseId: " + courseId + " and categoryId: " + categoryId);
        }
        return votes;
    }
}
