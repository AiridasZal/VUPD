package com.example.helloworld.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.models.Atsiliepimai;
import com.example.helloworld.repositories.AtsiliepimaiRepo;

@Service
public class AtsiliepimaiService {

    @Autowired
    AtsiliepimaiRepo atsiliepimaiRepo;
    
    public Atsiliepimai addAtsiliepimai(final Atsiliepimai atsiliepimai) {
        return atsiliepimaiRepo.save(atsiliepimai);
    }

    public List<Atsiliepimai> visiAtsiliepimai() {
        return atsiliepimaiRepo.findAll();
    }

    public List<Atsiliepimai> atsiliepimaiCourse(final String courseid) {
        List<Atsiliepimai> atsiliepimaiList = atsiliepimaiRepo.findByCourseId(courseid);
        if (atsiliepimaiList.isEmpty()) {
            throw new NotFoundException("No reviews found for courseid: " + courseid);
        }
        return atsiliepimaiList;
    }
}
