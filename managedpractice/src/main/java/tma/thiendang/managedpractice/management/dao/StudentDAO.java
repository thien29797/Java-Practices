package tma.thiendang.managedpractice.management.dao;

import org.springframework.beans.factory.annotation.Autowired;
import tma.thiendang.managedpractice.management.entity.Student;
import tma.thiendang.managedpractice.management.exception.NotFoundException;
import tma.thiendang.managedpractice.management.repository.CourseRepository;
import tma.thiendang.managedpractice.management.repository.StudentRepository;

import java.io.IOException;
import java.util.List;

public abstract class StudentDAO implements GenericDAO<Student>{

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public Student create(Student obj) {
        return null;
    }

    @Override
    public Student createById(Integer courseId, Student student) {
        return courseRepository.findById(courseId)
                .map(course -> {
                    student.setCourse(course);
                    return studentRepository.save(student);
                }).orElseThrow(() -> new NotFoundException("Course not found!"));
    }

    @Override
    public Student updateByRelatedId(Integer courseId, Integer studentId, Student studentUpdated) {
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

    @Override
    public Student update(Integer id, Student obj) {
        return null;
    }

    @Override
    public String deleteByRelatedID(Integer courseId, Integer studentId) {
        if (!courseRepository.existsById(courseId)) {
            throw new NotFoundException("Course not found!");
        }

        return studentRepository.findById(studentId)
                .map(student -> {
                    studentRepository.delete(student);
                    return "Deleted Successfully!";
                }).orElseThrow(() -> new NotFoundException("Student not found!"));
    }

    @Override
    public String delete(Student obj) {
        return null;
    }

    @Override
    public String deleteById(Integer id) {
        return null;
    }

    @Override
    public String deleteById(int id) {
        return null;
    }

    @Override
    public boolean deleteIfExisted(Object id) {
        return false;
    }

    @Override
    public List<Student> findAll() throws IOException {
        return studentRepository.findAll();
    }

    @Override
    public List<Student> findAllById (Integer courseId) {
        if (!courseRepository.existsById(courseId)) {
            throw new NotFoundException("Course not found!");
        }
        return studentRepository.findStudentByCourse_CourseID(courseId);
    }

    @Override
    public List<String> findById() {
        return null;
    }

    @Override
    public Student findOne(Integer id) {
        return null;
    }

    @Override
    public Student getOne() throws IOException, Exception {
        return null;
    }

    @Override
    public boolean createOrUpdate(Student obj) {
        return false;
    }
}
