package com.thiendang.management.cleanarchitecture.data.jpa;

import com.thiendang.management.cleanarchitecture.data.jpa.repositories.CourseRepository;
import com.thiendang.management.cleanarchitecture.ports.database.CourseGateway;
import com.thiendang.management.cleanarchitecture.ports.database.Database;

public class JpaDatabase implements Database {
    private CourseGateway courseGateway;

    public JpaDatabase(CourseRepository courseRepository) {
        courseGateway = new JpaCourseGateway(courseRepository);
    }

    @Override
    public CourseGateway courseGateway() {
        return courseGateway;
    }
}
