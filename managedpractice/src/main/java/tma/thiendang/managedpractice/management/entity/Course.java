package tma.thiendang.managedpractice.management.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "course")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
@AllArgsConstructor
public class Course implements Serializable {

    private static final long serialVersionUID = 1L;

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
    private Set<Student> studentList;

    public Course() {

    }

    public Course(String courseName, String courseTime, String description) {
        this.courseName = courseName;
        this.courseTime = courseTime;
        this.description = description;
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

    @Override
    public String toString() {
        return "Course{" +
                "courseID=" + courseID +
                ", courseName='" + courseName + '\'' +
                ", courseTime='" + courseTime + '\'' +
                ", description='" + description + '\'' +
                ", studentList=" + studentList +
                '}';
    }
}
