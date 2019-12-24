package com.thiendang.management.cleanarchitecture.data.jpa.repositories;

import com.thiendang.management.cleanarchitecture.data.jpa.data.StudentData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<StudentData, Integer> {

    List<StudentData> findStudentByCourse_CourseID(int CourseId);

    Integer countStudentByCourse_CourseID(int courseId);
}
