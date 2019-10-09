package tma.thiendang.managedpractice.management.dao;

import java.io.IOException;
import java.io.Serializable;
import java.util.List;

public interface GenericDAO<T> extends Serializable {

    boolean create(T obj);

    boolean update(T obj);

    boolean delete(T obj);

    boolean deleteIfExisted(Object id);

    List<T> findAll() throws IOException;

    List<String> findAllIds();

    T findOne(Object id);

    T getOne() throws IOException, Exception;

    boolean createOrUpdate(T obj);
}
