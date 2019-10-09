package tma.thiendang.managedpractice.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tma.thiendang.managedpractice.management.entity.Student;
import tma.thiendang.managedpractice.management.exception.NotFoundException;
import tma.thiendang.managedpractice.management.repository.CourseRepository;
import tma.thiendang.managedpractice.management.repository.StudentRepository;
import tma.thiendang.managedpractice.management.service.StudentService;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    private StudentService studentService;

    // GET STUDENT LIST
    @GetMapping("/students")
    public ResponseEntity<List<Student>> getAllStudent() throws IOException {
        List<Student> studentList = studentService.getAllStudent();
        if (studentList != null) {
            return new ResponseEntity<List<Student>>(studentList, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<List<Student>>(HttpStatus.NO_CONTENT);
        }
    }

    // GET STUDENT BY COURSE ID
    @GetMapping("/courses/{courseId}/students")
    public ResponseEntity<List<Student>> getStudentByCourseId(@PathVariable int courseId) {
        List<Student> studentList = studentService.getStudentByCourseId(courseId);
        if (studentList != null) {
            return new ResponseEntity<List<Student>>(studentList, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<List<Student>>(HttpStatus.NO_CONTENT);
        }
    }

    // CREATE STUDENT WITH COURSE ID
    @PostMapping("/courses/{courseId}/students")
    public ResponseEntity<Student> addStudent(@PathVariable int courseId,
                                              @Valid @RequestBody Student student) {
        Student newStudentObj = studentService.addStudent(courseId, student);
        if (newStudentObj != null) {
            return new ResponseEntity<Student>(newStudentObj, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<Student>(HttpStatus.CREATED);
        }
    }

    // UPDATE STUDENT BY STUDENT ID AND COURSE ID
    @PutMapping("/courses/{courseId}/students/{studentId}")
    public ResponseEntity<Student> updateStudent(@PathVariable int courseId,
                                                 @PathVariable int studentId,
                                                 @Valid @RequestBody Student studentUpdated) {
        Student updatedStudentObj = studentService.updateStudent(courseId, studentId, studentUpdated);
        if (updatedStudentObj != null) {
            return new ResponseEntity<Student>(updatedStudentObj, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<Student>(HttpStatus.BAD_REQUEST);
        }
    }

    // DELETE STDUENT BY STUDENT ID AND COURSE ID
    @DeleteMapping("/courses/{courseId}/students/{studentId}")
    public ResponseEntity<String> deleteStudent(@PathVariable int courseId,
                                                  @PathVariable int studentId) {

        String deleteNotification = studentService.deleteStudent(courseId, studentId);
        if (deleteNotification.compareTo("") == 0) {
            return new ResponseEntity<String>(deleteNotification, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }
    }
}
