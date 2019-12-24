package com.thiendang.management.cleanarchitecture.endpoints.getcourses;

import com.thiendang.management.cleanarchitecture.ports.presenters.CoursesViewModel;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.courses.GetCourseInputBoundary;
import com.thiendang.management.cleanarchitecture.ports.presenters.CoursesOutputBoundary;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.courses.GetCoursesRequest;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/courses")
public class GetCoursesEndpoint implements BaseEndpoint{
    private final GetCourseInputBoundary useCase;
    private final CoursesOutputBoundary presenter;

    public GetCoursesEndpoint(GetCourseInputBoundary useCase, CoursesOutputBoundary presenter) {
        this.useCase = useCase;
        this.presenter = presenter;
    }

    @GetMapping
    @ApiOperation(value = "Get courses", response = CoursesViewModel.class)
    public ResponseEntity execute() {
        useCase.execute(new GetCoursesRequest());

        return ResponseEntity.ok(presenter.getViewModel());
    }
}
