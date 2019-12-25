package com.thiendang.management.cleanarchitecture.ports.database;

import com.thiendang.management.cleanarchitecture.entities.Course;

import java.util.Collection;

public interface CourseGateway {
    Collection<Course> getAllExcludingCancelled();
    void add(Course course);
}
