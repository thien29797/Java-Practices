package com.thiendang.management.cleanarchitecture.presenters;

import com.thiendang.management.cleanarchitecture.ports.presenters.CourseCreatedOutputBoundary;
import com.thiendang.management.cleanarchitecture.ports.presenters.CourseCreatedViewModel;
import com.thiendang.management.cleanarchitecture.ports.usecases.addcourse.NewCourseResponse;

public class CourseCreatedPresenter implements CourseCreatedOutputBoundary {
    private CourseCreatedViewModel viewModel;

    @Override
    public CourseCreatedViewModel getViewModel() {
        return viewModel;
    }

    @Override
    public void present(NewCourseResponse responseModel) {
        viewModel = new CourseCreatedViewModel(responseModel.getCourseID());
    }
}
