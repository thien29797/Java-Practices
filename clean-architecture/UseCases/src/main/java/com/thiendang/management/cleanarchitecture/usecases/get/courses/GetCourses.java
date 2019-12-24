package com.thiendang.management.cleanarchitecture.usecases.get.courses;

import com.thiendang.management.cleanarchitecture.ports.database.CourseGateway;
import com.thiendang.management.cleanarchitecture.ports.presenters.CoursesOutputBoundary;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.CourseResponse;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.courses.GetCourseInputBoundary;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.courses.GetCoursesRequest;
import com.thiendang.management.cleanarchitecture.usecases.get.GetCourseBase;

public class GetCourses extends GetCourseBase implements GetCourseInputBoundary {
    private final CoursesOutputBoundary presenter;
    private final CourseGateway courseGateway;

    public GetCourses(CoursesOutputBoundary presenter, CourseGateway courseGateway) {
        this.presenter = presenter;
        this.courseGateway = courseGateway;
    }

    @Override
    public void execute(GetCoursesRequest request) {
        CourseResponse.CoursesResponseBuilder result = CourseResponse.builder();
        courseGateway.getAllExcludingCancelled().forEach(course -> result.addCourse(makeCourseResponse(course)));
        presenter.present(result.build());
    }
}
