package com.thiendang.management.cleanarchitecture.endpoints.addcourses;

import com.thiendang.management.cleanarchitecture.endpoints.BaseEndpoint;
import com.thiendang.management.cleanarchitecture.ports.presenters.CourseCreatedOutputBoundary;
import com.thiendang.management.cleanarchitecture.ports.presenters.CourseCreatedViewModel;
import com.thiendang.management.cleanarchitecture.ports.usecases.addcourse.AddCourseInputBoundary;
import com.thiendang.management.cleanarchitecture.ports.usecases.addcourse.AddCourseRequest;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.net.URI;
import java.text.MessageFormat;

@RestController
@RequestMapping("/api/v1/courses")
public class AddCourseEndpoint implements BaseEndpoint {
    private final AddCourseInputBoundary useCase;
    private final CourseCreatedOutputBoundary presenter;

    public AddCourseEndpoint(AddCourseInputBoundary useCase, CourseCreatedOutputBoundary presenter) {
        this.useCase = useCase;
        this.presenter = presenter;
    }

    @PostMapping
    @ApiOperation(value = "Add course", response = CourseCreatedViewModel.class)
    public ResponseEntity execute(@RequestBody @Valid NewCourseRequest request) {
        useCase.execute(
                AddCourseRequest
                    .builder()
                    .id(request.getCourseID())
                    .name(request.getCourseName())
                    .time(request.getCourseTime())
                    .description(request.getDescription())
                    .list(request.getStudentList())
                    .build()
        );
        return ResponseEntity
                .created(
                        URI.create(
                                MessageFormat.format("/api/v1/courses/{0}", presenter.getViewModel().getCourseID())
                        )
                )
                .body(presenter.getViewModel());
    }
}
