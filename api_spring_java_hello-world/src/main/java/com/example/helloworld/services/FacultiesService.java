package com.example.helloworld.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.helloworld.models.Faculty;
import com.example.helloworld.repositories.FacultiesRepository;
import java.util.List;

@Service
public class FacultiesService {

    @Autowired
    private FacultiesRepository facultiesRepository;

    public Faculty addFaculty(final Faculty faculty) {
        return facultiesRepository.save(faculty);
    }

    public List<Faculty> getAllFaculties() {
        return facultiesRepository.findAll();
    }
}
