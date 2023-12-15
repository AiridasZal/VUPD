package com.example.helloworld.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.helloworld.models.Fakultetas;
import com.example.helloworld.repositories.FakultetasRepo;

import java.util.List;

@Service
public class FakultetasService {
    @Autowired
    FakultetasRepo fakultetasRepo;

        public Fakultetas addFakultetas(final Fakultetas fakultetas) {
        return fakultetasRepo.save(fakultetas);
    }

        public List<Fakultetas> visiFakultetai() {
            return fakultetasRepo.findAll();
        }
}
