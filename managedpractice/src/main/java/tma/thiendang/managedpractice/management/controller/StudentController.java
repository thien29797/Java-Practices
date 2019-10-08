package tma.thiendang.managedpractice.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tma.thiendang.managedpractice.management.entity.Student;
import tma.thiendang.managedpractice.management.exception.NotFoundException;
import tma.thiendang.managedpractice.management.repository.CourseRepository;
import tma.thiendang.managedpractice.management.repository.StudentRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/courses/{courseId}/students")
    public List<Student> getStudentByCourseId(@PathVariable int courseId) {

        if(!courseRepository.existsById(courseId)) {
            throw new NotFoundException("Course not found!");
        }

        return studentRepository.findByCourseId(courseId);
    }

    @PostMapping("/courses/{courseId}/students")
    public Student addStudent(@PathVariable int courseId, @Valid @RequestBody Student student) {
        return courseRepository.findById(courseId)
                .map(course -> {
                    student.setCourse(course);
                    return studentRepository.save(student);
                }).orElseThrow(() -> new NotFoundException("Student not found!"));
    }

    @PutMapping("/courses/{courseId}/students/{studentId}")
    public Student updateStudent(@PathVariable int courseId,
                                       @PathVariable int studentId,
                                       @Valid @RequestBody Student studentUpdated) {

        if (!courseRepository.existsById(courseId)) {
            throw new NotFoundException("Course not found!");
        }

        return studentRepository.findById(studentId)
                .map(student -> {
                    student.setAddress(studentUpdated.getAddress());
                    student.setDateOfBirth(studentUpdated.getDateOfBirth());
                    student.setFullName(studentUpdated.getFullName());
                    student.setPhoneNumber(studentUpdated.getPhoneNumber());
                    return studentRepository.save(student);
                }).orElseThrow(() -> new NotFoundException("Student not found!"));
    }

    @DeleteMapping("/courses/{courseId}/students/{studentId}")
    public String deleteStudent(@PathVariable int courseId,
                                   @PathVariable int studentId) {

        if (!courseRepository.existsById(courseId)) {
            throw new NotFoundException("Course not found!");
        }

        return studentRepository.findById(studentId)
                .map(student -> {
                    studentRepository.delete(student);
                    return "Deleted Successfully!";
                }).orElseThrow(() -> new NotFoundException("Student not found!"));
    }
}
