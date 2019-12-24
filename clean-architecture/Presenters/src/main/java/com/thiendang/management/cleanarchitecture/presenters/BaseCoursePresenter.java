package com.thiendang.management.cleanarchitecture.presenters;

import com.thiendang.management.cleanarchitecture.ports.presenters.CourseViewModel;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.CourseResponse;

public class BaseCoursePresenter {

    protected BaseCoursePresenter() {}

    public static CourseViewModel mapToCourseViewModel(CourseResponse responseModel) {
        return CourseViewModel
                .builder()
                .id(responseModel.getCourseID().toString())
                .name(responseModel.getCourseName())
                .time(responseModel.getCourseTime())
                .description(responseModel.getDescription())
                .list(responseModel.getStudentList())
                .build();
    }
}
