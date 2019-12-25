package com.thiendang.management.cleanarchitecture.usecases.addcourse;

import com.thiendang.management.cleanarchitecture.entities.Course;
import com.thiendang.management.cleanarchitecture.ports.database.CourseGateway;
import com.thiendang.management.cleanarchitecture.ports.presenters.CourseCreatedOutputBoundary;
import com.thiendang.management.cleanarchitecture.ports.usecases.addcourse.AddCourseInputBoundary;
import com.thiendang.management.cleanarchitecture.ports.usecases.addcourse.AddCourseRequest;
import com.thiendang.management.cleanarchitecture.ports.usecases.addcourse.NewCourseResponse;

public class AddCourse implements AddCourseInputBoundary {
    private final CourseCreatedOutputBoundary presenter;
    private final CourseGateway courseGateway;

    public AddCourse(CourseCreatedOutputBoundary presenter, CourseGateway courseGateway) {
        this.presenter = presenter;
        this.courseGateway = courseGateway;
    }

    @Override
    public void execute(AddCourseRequest request) {
        Integer id = addCourse(request);
        NewCourseResponse responseModel = new NewCourseResponse(id);
        presenter.present(responseModel);
    }

    private Integer addCourse(AddCourseRequest request) {
        return courseGateway.add(
                new Course(
                        request.getCourseID(),
                        request.getCourseName(),
                        request.getCourseTime(),
                        request.getDescription(),
                        request.getStudentList()
                )
        );
    }
}
