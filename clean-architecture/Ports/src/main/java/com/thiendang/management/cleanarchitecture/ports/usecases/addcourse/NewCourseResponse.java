package com.thiendang.management.cleanarchitecture.ports.usecases.addcourse;

import lombok.Getter;

@Getter
public class NewCourseResponse {

    private Integer courseID;

    public NewCourseResponse(Integer courseID) {
        this.courseID = courseID;
    }
}
