package tma.thiendang.managedpractice.management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tma.thiendang.managedpractice.management.entity.Course;
import tma.thiendang.managedpractice.management.exception.NotFoundException;
import tma.thiendang.managedpractice.management.repository.CourseRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }

    public Course getCourseByID(int courseId) {
        Optional<Course> optCourse = courseRepository.findById(courseId);
        if (optCourse.isPresent()) {
            return optCourse.get();
        } else {
            throw new NotFoundException("Course not found with id " + courseId);
        }
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(int courseId, Course courseUpdated) {
        return courseRepository.findById(courseId)
                .map(course -> {
                    course.setCourseName(courseUpdated.getCourseName());
                    course.setCourseTime(courseUpdated.getCourseTime());
                    course.setDescription(courseUpdated.getDescription());
                    return courseRepository.save(course);
                }).orElseThrow(() -> new NotFoundException("Course not found with id " + courseId));
    }

    public String deleteCourse(int courseId) {
        return courseRepository.findById(courseId)
                .map(course -> {
                    courseRepository.delete(course);
                    return "Delete Successfully!";
                }).orElseThrow(() -> new NotFoundException("Course not found with id " + courseId));
    }
}
