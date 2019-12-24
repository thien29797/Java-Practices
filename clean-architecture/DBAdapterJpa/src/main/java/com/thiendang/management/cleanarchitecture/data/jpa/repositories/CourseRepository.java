package com.thiendang.management.cleanarchitecture.data.jpa.repositories;

import com.thiendang.management.cleanarchitecture.data.jpa.data.CourseData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<CourseData, Integer> {
}
