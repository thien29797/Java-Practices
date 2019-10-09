package tma.thiendang.managedpractice.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tma.thiendang.managedpractice.management.entity.Course;
import tma.thiendang.managedpractice.management.service.CourseService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseService courseService;

    // GET COURSE LIST
    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourse() {
        List<Course> courseList = courseService.getAllCourse();
        if (courseList != null) {
            return new ResponseEntity<List<Course>>(courseList, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<List<Course>>(HttpStatus.NO_CONTENT);
        }
    }

    // GET COURSE BY COURSE ID
    @GetMapping("/courses/{courseId}")
    public ResponseEntity<Course> getCourseByID(@PathVariable int courseId) {
        Course course = courseService.getCourseByID(courseId);
        if (course != null) {
            return new ResponseEntity<Course>(course, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<Course>(HttpStatus.NO_CONTENT);
        }
    }

    // CREATE NEW COURSE
    @PostMapping("/courses")
    public ResponseEntity<Course> createCourse(@Valid @RequestBody Course course) {
        Course newCourseObj = courseService.createCourse(course);
        if (newCourseObj != null) {
            return new ResponseEntity<Course>(newCourseObj, HttpStatus.CREATED);
        }
        else {
            return new ResponseEntity<Course>(HttpStatus.BAD_REQUEST);
        }
    }

    // UPDATE COURSE BY COURSE ID
    @PutMapping("/courses/{courseId}")
    public ResponseEntity<Course> updateCourse(@PathVariable int courseId, @Valid @RequestBody Course courseUpdated) {
        Course updatedCourseObj = courseService.updateCourse(courseId, courseUpdated);
        if (updatedCourseObj != null) {
            return new ResponseEntity<Course>(updatedCourseObj, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<Course>(HttpStatus.BAD_REQUEST);
        }
    }

    // DELETE COURSE BY COURSE ID
    @DeleteMapping("/courses/{courseId}")
    public ResponseEntity<String> deleteCourse(@PathVariable int courseId) {
        String deleteNotification = courseService.deleteCourse(courseId);
        if (deleteNotification.compareTo("") == 0) {
            return new ResponseEntity<String>(deleteNotification, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }
    }

}
