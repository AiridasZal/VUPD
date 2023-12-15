package com.example.helloworld.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.models.Balsai;
import com.example.helloworld.repositories.BalsaiRepo;

@Service
public class BalsaiService {

    @Autowired
    BalsaiRepo balsaiRepo;

    public Balsai addBalsai(final Balsai balsai) {
        return balsaiRepo.save(balsai);
    }

    public List<Balsai> visiBalsai() {
        return balsaiRepo.findAll();
    }

    public List<Balsai> balsaiCourse(final String courseid) {
        List<Balsai> balsaiList = balsaiRepo.findByCourseId(courseid);
        if (balsaiList.isEmpty()) {
            throw new NotFoundException("No votes found for courseid: " + courseid);
        }
        return balsaiList;
    }

    public List<Balsai> balsaiCategory(final String courseid, final String categoryid) {
        List<Balsai> balsaiList = balsaiRepo.findByCategoryId(courseid, categoryid);
        if (balsaiList.isEmpty()) {
            throw new NotFoundException("No votes found for courseid: " + courseid);
        }
        return balsaiList;
    }
}
