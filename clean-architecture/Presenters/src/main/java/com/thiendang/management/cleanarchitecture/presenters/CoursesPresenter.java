package com.thiendang.management.cleanarchitecture.presenters;

import com.thiendang.management.cleanarchitecture.ports.presenters.CourseViewModel;
import com.thiendang.management.cleanarchitecture.ports.presenters.CoursesOutputBoundary;
import com.thiendang.management.cleanarchitecture.ports.presenters.CoursesViewModel;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.courses.CoursesResponse;

public class CoursesPresenter extends BaseCoursePresenter implements CoursesOutputBoundary {
    private CoursesViewModel viewModel;

    @Override
    public CoursesViewModel getViewModel() {
        return viewModel;
    }

    @Override
    public void present(CoursesResponse responseModel) {
        CourseViewModel.CoursesViewModelBuilder coursesViewModelBuilder = CoursesViewModel.builder();
        responseModel.getCourses()
                .stream()
                .map(BaseCoursePresenter::mapToCourseViewModel)
                .forEach(coursesViewModelBuilder::addCourseViewModel);
        viewModel = coursesViewModelBuilder.builder();
    }
}
