package com.thiendang.management.cleanarchitecture.ports.presenters;

public class CourseCreatedViewModel {

    private Integer courseID;

    public CourseCreatedViewModel(Integer courseID) {
        this.courseID = courseID;
    }

    public Integer getCourseID() {
        return courseID;
    }
}
