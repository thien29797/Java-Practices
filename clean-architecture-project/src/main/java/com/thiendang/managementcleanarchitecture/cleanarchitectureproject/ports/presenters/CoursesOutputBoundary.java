package com.thiendang.managementcleanarchitecture.cleanarchitectureproject.ports.presenters;

import com.thiendang.managementcleanarchitecture.cleanarchitectureproject.ports.usecases.get.courses.CoursesResponse;

public interface CoursesOutputBoundary {
    CoursesViewModel getViewModel();
    void present(CoursesResponse responseModel);
}
