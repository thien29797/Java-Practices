package com.thiendang.management.cleanarchitecture.ports.usecases.get;

import com.thiendang.management.cleanarchitecture.entities.Student;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Set;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CourseResponse {
    private Integer courseID;
    private String courseName;
    private String courseTime;
    private String description;
    private Set<Student> studentList;

    public CourseResponse(Integer courseID, String courseName, String courseTime, String description, Set<Student> studentList) {
        this.courseID = courseID;
        this.courseName = courseName;
        this.courseTime = courseTime;
        this.description = description;
        this.studentList = studentList;
    }

    public Integer getCourseID() {
        return courseID;
    }

    public void setCourseID(Integer courseID) {
        this.courseID = courseID;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseTime() {
        return courseTime;
    }

    public void setCourseTime(String courseTime) {
        this.courseTime = courseTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Student> getStudentList() {
        return studentList;
    }

    public void setStudentList(Set<Student> studentList) {
        this.studentList = studentList;
    }
}
