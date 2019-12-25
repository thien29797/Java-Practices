package com.thiendang.management.cleanarchitecture.ports.presenters;

import com.thiendang.management.cleanarchitecture.ports.usecases.get.CourseResponse;

public interface CourseOutputBoundary {
    CourseViewModel getViewModel();
    void present(CourseResponse responseModel);
}
