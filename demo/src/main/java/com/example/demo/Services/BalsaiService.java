package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Exceptions.NotFoundException;
import com.example.demo.Repositories.BalsaiRepo;
import com.example.demo.Entities.Balsai;

@Service

public class BalsaiService {
    @Autowired
    BalsaiRepo balsaiRepo;

    public Balsai addBalsai(Balsai balsai){
        return balsaiRepo.save(balsai);
    }

    public List<Balsai> visiBalsai(){
        return balsaiRepo.findAll();
    }

    public List<Balsai> balsaiCourse(String courseid){
        List<Balsai> balsaiList = balsaiRepo.findByCourseId(courseid);
        if (balsaiList.isEmpty()) {
            throw new NotFoundException("No votes found for courseid: " + courseid);
        }
        return balsaiList;
    }

}
