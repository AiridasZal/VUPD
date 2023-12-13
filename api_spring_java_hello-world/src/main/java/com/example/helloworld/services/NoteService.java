package com.example.helloworld.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.helloworld.dto.NoteDto;
import com.example.helloworld.models.Note;
import com.example.helloworld.repositories.NoteRepository;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteService(final NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public NoteDto save(final NoteDto noteDto) {
        // Convert NoteDto to Note
        Note note = new Note();
        note.setContent(noteDto.getContent());

        // Save Note and then convert back to NoteDto
        Note savedNote = noteRepository.save(note);
        return convertToDto(savedNote);
    }

    private NoteDto convertToDto(final Note note) {
        return new NoteDto(note.getContent());
    }

    // Add methods to convert from Note to NoteDto if needed
}
