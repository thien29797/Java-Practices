package com.thiendang.management.cleanarchitecture.ports.usecases.get.courses;

import com.thiendang.management.cleanarchitecture.ports.usecases.get.CourseResponse;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class CoursesResponse {
    @Singular("addCourse") private List<CourseResponse> courses;
}
