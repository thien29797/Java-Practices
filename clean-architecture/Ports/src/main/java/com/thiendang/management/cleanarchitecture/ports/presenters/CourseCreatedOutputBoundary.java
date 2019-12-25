package com.thiendang.management.cleanarchitecture.ports.presenters;

import com.thiendang.management.cleanarchitecture.ports.usecases.addcourse.NewCourseResponse;

public interface CourseCreatedOutputBoundary {
    CourseCreatedViewModel getViewModel();
    void present(NewCourseResponse responseModel);
}
