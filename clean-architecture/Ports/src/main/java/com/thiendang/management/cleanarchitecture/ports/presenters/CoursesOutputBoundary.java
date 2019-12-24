package com.thiendang.management.cleanarchitecture.ports.presenters;

import com.thiendang.management.cleanarchitecture.ports.usecases.get.courses.CoursesResponse;

public interface CoursesOutputBoundary {
    CoursesViewModel getViewModel();
    void present(CoursesResponse responseModel);
}
