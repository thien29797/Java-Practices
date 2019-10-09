package tma.thiendang.managedpractice.management.service;

import org.springframework.stereotype.Service;
import tma.thiendang.managedpractice.management.dao.StudentDAO;
import tma.thiendang.managedpractice.management.entity.Student;

import java.io.IOException;
import java.util.List;

@Service
public class StudentService {

    private StudentDAO studentDAO;

    public List<Student> getAllStudent() throws IOException {
        return studentDAO.findAll();
    }

    public List<Student> getStudentByCourseId(int courseId) {
        return studentDAO.findAllById(courseId);
    }

    public Student addStudent(int courseId, Student student) {
        return studentDAO.createById(courseId, student);
    }

    public Student updateStudent( int courseId, int studentId, Student studentUpdated) {
        return studentDAO.updateByRelatedId(courseId, studentId, studentUpdated);
    }

    public String deleteStudent(int courseId, int studentId) {
        return studentDAO.deleteByRelatedID(courseId, studentId);
    }
}
