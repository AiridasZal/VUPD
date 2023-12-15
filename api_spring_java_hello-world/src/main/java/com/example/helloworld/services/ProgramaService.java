package com.example.helloworld.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.models.Programa;
import com.example.helloworld.repositories.ProgramaRepo;

import java.util.List;

@Service
public class ProgramaService {
    @Autowired
    ProgramaRepo programaRepo;

        public Programa addPrograma(final Programa programa) {
        return programaRepo.save(programa);
    }

    public List<Programa> visosProgramos() {
        return programaRepo.findAll();
    }

    public List<Programa> programosFaculty(final String facultyid) {
        List<Programa> programaList = programaRepo.findByFacultyId(facultyid);
        if (programaList.isEmpty()) {
            throw new NotFoundException("No programmes found for facultyid: " + facultyid);
        }
        return programaList;
    }
}
