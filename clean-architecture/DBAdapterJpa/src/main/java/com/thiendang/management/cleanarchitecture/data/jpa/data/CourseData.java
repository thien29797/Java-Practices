package com.thiendang.management.cleanarchitecture.data.jpa.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "course")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courseID;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "course_time")
    private String courseTime;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    private Set<StudentData> studentList;

    public CourseData(String courseName, String courseTime, String description, Set<StudentData> studentList) {
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

    public Set<StudentData> getStudentList() {
        return studentList;
    }

    public void setStudentList(Set<StudentData> studentList) {
        this.studentList = studentList;
    }
}
