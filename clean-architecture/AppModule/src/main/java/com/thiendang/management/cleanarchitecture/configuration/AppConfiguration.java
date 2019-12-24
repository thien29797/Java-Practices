package com.thiendang.management.cleanarchitecture.configuration;

import com.thiendang.management.cleanarchitecture.data.jpa.JpaDatabase;
import com.thiendang.management.cleanarchitecture.data.jpa.repositories.CourseRepository;
import com.thiendang.management.cleanarchitecture.ports.database.Database;
import com.thiendang.management.cleanarchitecture.ports.presenters.CoursesOutputBoundary;
import com.thiendang.management.cleanarchitecture.ports.usecases.get.courses.GetCourseInputBoundary;
import com.thiendang.management.cleanarchitecture.presenters.CoursesPresenter;
import com.thiendang.management.cleanarchitecture.usecases.get.courses.GetCourses;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EntityScan("com.thiendang.management.cleanarchitecture.data.jpa.data")
@EnableJpaRepositories("com.thiendang.management.cleanarchitecture.data.jpa.repositories")
public class AppConfiguration {
    @Bean
    public Database database(CourseRepository courseRepository) {
        return new JpaDatabase(courseRepository);
    }

    @Bean
    public GetCourseInputBoundary getCourseInputBoundary(CoursesOutputBoundary coursesOutputBoundary, Database database) {
        return new GetCourses(coursesOutputBoundary, database.courseGateway());
    }

    @Bean
    public CoursesOutputBoundary coursesOutputBoundary() {
        return new CoursesPresenter();
    }

}
