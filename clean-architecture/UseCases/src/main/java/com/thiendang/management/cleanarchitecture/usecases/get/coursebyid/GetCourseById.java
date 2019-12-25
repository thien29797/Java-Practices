package com.thiendang.management.cleanarchitecture.usecases.get.coursebyid;

import com.thiendang.management.cleanarchitecture.entities.Course;
import com.thiendang.management.cleanarchitecture.ports.database.CourseGateway;
import com.thiendang.management.cleanarchitecture.ports.presenters.CourseOutputBoundary;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.coursebyid.GetCourseByIdInputBoundary;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.coursebyid.GetCourseRequest;
import com.thiendang.management.cleanarchitecture.usecases.get.GetCourseBase;

public class GetCourseById extends GetCourseBase implements GetCourseByIdInputBoundary {
    private final CourseOutputBoundary presenter;
    private final CourseGateway courseGateway;

    public GetCourseById(CourseOutputBoundary presenter, CourseGateway courseGateway) {
        this.presenter = presenter;
        this.courseGateway = courseGateway;
    }

    @Override
    public void execute(GetCourseRequest request) {
        Course course = courseGateway.getAllExcludingCancelled(request.getCourseID());
        presenter.present(makeCourseResponse(course));
    }
}
