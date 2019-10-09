package tma.thiendang.managedpractice.management.service;

import org.springframework.stereotype.Service;
import tma.thiendang.managedpractice.management.dao.CourseDAO;
import tma.thiendang.managedpractice.management.entity.Course;

import java.util.List;

@Service
public class CourseService {

    private CourseDAO courseDAO;

    public List<Course> getAllCourse() {
        return courseDAO.findAll();
    }

    public Course getCourseByID(int courseId) {
        return courseDAO.findOne(courseId);
    }

    public Course createCourse(Course course) {
        return courseDAO.create(course);
    }

    public Course updateCourse(int courseId, Course courseUpdated) {
        return courseDAO.update(courseId, courseUpdated);
    }

    public String deleteCourse(int courseId) {
        return courseDAO.deleteById(courseId);
    }
}
