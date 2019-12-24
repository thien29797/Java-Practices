package com.thiendang.management.cleanarchitecture.usecases.get;

import com.thiendang.management.cleanarchitecture.entities.Course;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.CourseResponse;

public abstract class GetCourseBase {
    protected GetCourseBase() {}

    public static CourseResponse makeCourseResponse(Course course) {
        return new CourseResponse(
                course.getCourseID(),
                course.getCourseName(),
                course.getCourseTime(),
                course.getDescription(),
                course.getStudentList()
        );
    }
}
