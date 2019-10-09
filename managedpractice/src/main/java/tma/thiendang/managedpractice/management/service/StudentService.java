package tma.thiendang.managedpractice.management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tma.thiendang.managedpractice.management.entity.Student;
import tma.thiendang.managedpractice.management.exception.NotFoundException;
import tma.thiendang.managedpractice.management.repository.CourseRepository;
import tma.thiendang.managedpractice.management.repository.StudentRepository;

import java.util.List;

@Service
public class StudentService {


    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    public List<Student> getAllStudent() {
        return studentRepository.findAll();
    }

    public List<Student> getStudentByCourseId(int courseId) {

        if(!courseRepository.existsById(courseId)) {
            throw new NotFoundException("Course not found!");
        }

        return studentRepository.findStudentByCourse_CourseID(courseId);
    }

    public Student addStudent(int courseId, Student student) {
        return courseRepository.findById(courseId)
                .map(course -> {
                    student.setCourse(course);
                    return studentRepository.save(student);
                }).orElseThrow(() -> new NotFoundException("Student not found!"));
    }

    public Student updateStudent( int courseId, int studentId, Student studentUpdated) {

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

    public String deleteStudent(int courseId, int studentId) {

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
