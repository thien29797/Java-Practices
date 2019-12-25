package com.thiendang.management.cleanarchitecture.endpoints.addcourses;

import com.thiendang.management.cleanarchitecture.entities.Student;
import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@ApiModel(value = "New Course Request")
public class NewCourseRequest {
    private Integer courseID;
    private String courseName;
    private String courseTime;
    private String description;
    private Set<Student> studentList;
}
