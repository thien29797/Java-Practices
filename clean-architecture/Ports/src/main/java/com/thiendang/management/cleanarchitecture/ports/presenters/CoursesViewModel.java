package com.thiendang.management.cleanarchitecture.ports.presenters;

import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class CoursesViewModel {
    @Singular("addCourseViewModel") private List<CourseViewModel> courses;
}
