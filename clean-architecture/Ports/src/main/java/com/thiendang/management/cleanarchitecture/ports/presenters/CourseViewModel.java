package com.thiendang.management.cleanarchitecture.ports.presenters;

import com.thiendang.management.cleanarchitecture.data.jpa.data.StudentData;
import lombok.Builder;
import lombok.Getter;

import java.util.Set;

@Builder
@Getter
public class CourseViewModel {
    private Integer courseID;
    private String courseName;
    private String courseTime;
    private String description;
    private Set<StudentData> studentList;

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

    public Set<StudentData> getStudentList() {
        return studentList;
    }

    public void setStudentList(Set<StudentData> studentList) {
        this.studentList = studentList;
    }
}
