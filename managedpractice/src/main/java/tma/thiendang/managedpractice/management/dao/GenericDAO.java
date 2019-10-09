package tma.thiendang.managedpractice.management.dao;

import java.io.IOException;
import java.io.Serializable;
import java.util.List;

public interface GenericDAO<T> extends Serializable {

    T create(T obj);

    T createById(Integer id, T obj);

    T update(Integer id, T obj);

    T updateByRelatedId(Integer relatedId, Integer id, T obj);

    String delete(T obj);

    String deleteById(Integer id);

    String deleteByRelatedID(Integer relatedId, Integer id);

    String deleteById(int id);

    boolean deleteIfExisted(Object id);

    List<T> findAll() throws IOException;

    List<T> findAllById(Integer id);

    List<String> findById();

    T findOne(Integer id);

    T getOne() throws IOException, Exception;

    boolean createOrUpdate(T obj);

    Integer countById(Integer id);
}
