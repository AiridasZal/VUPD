package com.example.helloworld.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.models.Dalykas;
import com.example.helloworld.repositories.DalykasRepo;

@Service
public class DalykasService {
    
    @Autowired
    DalykasRepo kursasRepo;

    public Dalykas addKursas (final Dalykas kursas) {
        return kursasRepo.save(kursas);
    }

    public List<Dalykas> visiKursai() {
        return kursasRepo.findAll();
    }

    public List<Dalykas> kursasCourse(final String id) {
        List<Dalykas> kursaiList = kursasRepo.findByCourseId(id);
        if (kursaiList.isEmpty()) {
            throw new NotFoundException("No courses found for id: " + id);
        }
        return kursaiList;
    }

    public List<Dalykas> kursasYear(final String faculty, final String program, final int year) {
        List<Dalykas> kursaiList = kursasRepo.findByYear(faculty, program, year);
        if (kursaiList.isEmpty()) {
            throw new NotFoundException("No courses found for " + faculty + ", " + program + ", " + year);
        }
        return kursaiList;
    }

        public List<Dalykas> kursasId(final String faculty, final String program, final int year, final String id) {
        List<Dalykas> kursaiList = kursasRepo.findById(faculty, program, year, id);
        if (kursaiList.isEmpty()) {
            throw new NotFoundException("No courses found for " + faculty + ", " + program + ", " + year + ", " + id);
        }
        return kursaiList;
    }
}
