package tma.thiendang.managedpractice.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tma.thiendang.managedpractice.management.entity.Student;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    List<Student> findStudentByCourse_CourseID(int CourseID);
}
