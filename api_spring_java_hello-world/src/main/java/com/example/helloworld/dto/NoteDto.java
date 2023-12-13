package com.example.helloworld.dto;

public class NoteDto {
    private String content;

    public NoteDto() {
    }

    public NoteDto(final String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public void setContent(final String content) {
        this.content = content;
    }
}

