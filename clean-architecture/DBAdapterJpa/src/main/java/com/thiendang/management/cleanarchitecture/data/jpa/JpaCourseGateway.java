package com.thiendang.management.cleanarchitecture.data.jpa;

import com.thiendang.management.cleanarchitecture.data.jpa.repositories.CourseRepository;
import com.thiendang.management.cleanarchitecture.ports.database.CourseGateway;
import org.springframework.stereotype.Component;

@Component
public class JpaCourseGateway implements CourseGateway {

    private final CourseRepository courseRepository;

    public JpaCourseGateway(final CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }
}
