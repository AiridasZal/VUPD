package com.example.helloworld.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.helloworld.exceptions.NotFoundException;
import com.example.helloworld.models.Course;
import com.example.helloworld.repositories.CoursesRepository;
import java.util.List;

@Service
public class CoursesService {

    @Autowired
    private CoursesRepository coursesRepository;

    public Course addCourse(final Course course) {
        return coursesRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return coursesRepository.findAll();
    }

    public List<Course> getCoursesByFaculty(final String facultyId) {
        List<Course> courses = coursesRepository.findByFacultyId(facultyId);
        if (courses.isEmpty()) {
            throw new NotFoundException("No courses found for facultyId: " + facultyId);
        }
        return courses;
    }
}
