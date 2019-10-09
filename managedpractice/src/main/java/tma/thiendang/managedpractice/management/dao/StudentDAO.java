package tma.thiendang.managedpractice.management.dao;

import tma.thiendang.managedpractice.management.entity.Student;

import java.io.IOException;
import java.util.List;

public class StudentDAO implements GenericDAO<Student>{

    @Override
    public Student create(Student obj) {
        return null;
    }

    @Override
    public Student update(int id, Student obj) {
        return null;
    }

    @Override
    public String delete(Student obj) {
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
        return null;
    }

    @Override
    public List<String> findById() {
        return null;
    }

    @Override
    public Student findOne(int id) {
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
