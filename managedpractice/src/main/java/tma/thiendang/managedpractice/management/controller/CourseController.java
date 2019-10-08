package tma.thiendang.managedpractice.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tma.thiendang.managedpractice.management.entity.Course;
import tma.thiendang.managedpractice.management.exception.NotFoundException;
import tma.thiendang.managedpractice.management.repository.CourseRepository;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    // GET COURSE LIST
    @GetMapping("/courses")
    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }

    // GET COURSE BY COURSE ID
    @GetMapping("/courses/{courseId}")
    public Course getCourseByID(@PathVariable int courseId) {
        Optional<Course> optCourse = courseRepository.findById(courseId);
        if (optCourse.isPresent()) {
            return optCourse.get();
        } else {
            throw new NotFoundException("Course not found with id " + courseId);
        }
    }

    // CREATE NEW COURSE
    @PostMapping("/courses")
    public Course createCourse(@Valid @RequestBody Course course) {
        return courseRepository.save(course);
    }

    // UPDATE COURSE BY COURSE ID
    @PutMapping("/courses/{courseId}")
    public Course updateCourse(@PathVariable int courseId, @Valid @RequestBody Course courseUpdated) {
        return courseRepository.findById(courseId)
                .map(course -> {
                    course.setCourseName(courseUpdated.getCourseName());
                    course.setCourseTime(courseUpdated.getCourseTime());
                    course.setDescription(courseUpdated.getDescription());
                    return courseRepository.save(course);
                }).orElseThrow(() -> new NotFoundException("Course not found with id " + courseId));
    }

    // DELETE COURSE BY COURSE ID
    @DeleteMapping("/courses/{courseId}")
    public String deleteCourse(@PathVariable int courseId) {
        return courseRepository.findById(courseId)
                .map(course -> {
                    courseRepository.delete(course);
                    return "Delete Successfully!";
                }).orElseThrow(() -> new NotFoundException("Course not found with id " + courseId));
    }

}
