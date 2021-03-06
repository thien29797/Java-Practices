package tma.thiendang.managedpractice.management.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import tma.thiendang.managedpractice.management.entity.Course;
import tma.thiendang.managedpractice.management.exception.NotFoundException;
import tma.thiendang.managedpractice.management.repository.CourseRepository;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Repository
public class CourseDAO implements GenericDAO<Course> {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public Course create(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course createById(Integer id, Course obj) {
        return null;
    }

    @Override
    public Course update(Integer courseId, Course courseUpdated) {
        return courseRepository.findById(courseId)
                .map(course -> {
                    course.setCourseName(courseUpdated.getCourseName());
                    course.setCourseTime(courseUpdated.getCourseTime());
                    course.setDescription(courseUpdated.getDescription());
                    return courseRepository.save(course);
                }).orElseThrow(() -> new NotFoundException("Course not found with id " + courseId));
    }

    @Override
    public Course updateByRelatedId(Integer relatedId, Integer id, Course obj) {
        return null;
    }

    @Override
    public String delete(Course obj) {
        return null;
    }

    @Override
    public String deleteById(Integer id) {
        return null;
    }

    @Override
    public String deleteByRelatedID(Integer relatedId, Integer id) {
        return null;
    }

    @Override
    public String deleteById(int courseId) {
        return courseRepository.findById(courseId)
                .map(course -> {
                    courseRepository.delete(course);
                    return "Delete Successfully!";
                }).orElseThrow(() -> new NotFoundException("Course not found with id " + courseId));
    }

    @Override
    public boolean deleteIfExisted(Object id) {
        return false;
    }

    @Override
    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    @Override
    public List<Course> findAllById(Integer id) {
        return null;
    }

    @Override
    public List<String> findById() {
        return null;
    }

    @Override
    public Course findOne(Integer courseId) {
        Optional<Course> optCourse = courseRepository.findById(courseId);
        if (optCourse.isPresent()) {
            return optCourse.get();
        } else {
            throw new NotFoundException("Course not found with id " + courseId);
        }
    }

    @Override
    public Course getOne() throws IOException, Exception {
        return null;
    }

    @Override
    public boolean createOrUpdate(Course obj) {
        return false;
    }

    @Override
    public Integer countById(Integer id) {
        return null;
    }
}
