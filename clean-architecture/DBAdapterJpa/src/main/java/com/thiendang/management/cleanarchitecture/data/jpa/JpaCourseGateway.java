package com.thiendang.management.cleanarchitecture.data.jpa;

import com.thiendang.management.cleanarchitecture.data.jpa.data.CourseData;
import com.thiendang.management.cleanarchitecture.data.jpa.repositories.CourseRepository;
import com.thiendang.management.cleanarchitecture.entities.Course;
import com.thiendang.management.cleanarchitecture.ports.database.CourseGateway;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.stream.Collectors;

@Component
public class JpaCourseGateway implements CourseGateway {

    private final CourseRepository courseRepository;

    public JpaCourseGateway(final CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public Collection<Course> getAllExcludingCancelled() {
        return courseRepository.findByCancelledDateIsNull()
                .stream()
                .map(this::mapToCourse)
                .collect(Collectors.toList());
    }

    @Override
    public void add(Course course) {
        CourseData courseData = CourseData
                .builder()
                .id(course.getCourseID())
                .name(course.getCourseName())
                .time(course.getCourseTime())
                .description(course.getDescription())
                .list(course.getStudentList())
                .build();
        courseRepository.save(courseData);
    }

    private Course mapToCourse(Course courseData) {
        return new Course(
                courseData.getCourseID(),
                courseData.getCourseName(),
                courseData.getCourseTime(),
                courseData.getDescription(),
                courseData.getStudentList()
        );
    }
}
