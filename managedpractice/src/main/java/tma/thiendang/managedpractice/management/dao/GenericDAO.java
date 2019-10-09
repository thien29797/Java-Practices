package tma.thiendang.managedpractice.management.dao;

import java.io.IOException;
import java.io.Serializable;
import java.util.List;

public interface GenericDAO<T> extends Serializable {

    T create(T obj);

    T update(int id, T obj);

    String delete(T obj);

    String deleteById(int id);

    boolean deleteIfExisted(Object id);

    List<T> findAll() throws IOException;

    List<String> findById();

    T findOne(int id);

    T getOne() throws IOException, Exception;

    boolean createOrUpdate(T obj);
}
