package com.thiendang.management.cleanarchitecture.ports.usecases.get.coursebyid;

import com.thiendang.management.cleanarchitecture.ports.usecases.get.courses.GetCoursesRequest;

public interface GetCourseByIdInputBoundary {
    void execute(GetCourseRequest request);
}
