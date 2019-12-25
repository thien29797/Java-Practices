package com.thiendang.management.cleanarchitecture.ports.usecases.addcourse;

import com.thiendang.management.cleanarchitecture.entities.Student;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Set;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddCourseRequest {
    private Integer courseID;
    private String courseName;
    private String courseTime;
    private String description;
    private Set<Student> studentList;
}
