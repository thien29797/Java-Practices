package tma.thiendang.managedpractice.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tma.thiendang.managedpractice.management.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

}
