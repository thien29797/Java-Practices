package pro.thiendang.ManageStudentScore.model;

import org.hibernate.annotations.NaturalId;
import pro.thiendang.ManageStudentScore.model.enums.Duration;
import pro.thiendang.ManageStudentScore.model.enums.Type;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.Set;

@Entity
@Table(name = "test_subject")
public class TestSubject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subject_id;

    @Column(name = "test_name")
    private String test_name;

    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    @NaturalId
    private Type type;

    @Enumerated(EnumType.STRING)
    @Column(name = "duration")
    @NaturalId
    private Duration duration;

    @OneToMany(fetch = FetchType.LAZY)
    private Set<SubjectCategory> subjectCategoryList;

    public TestSubject(String test_name, Type type, Duration duration, Set<SubjectCategory> subjectCategoryList) {
        this.test_name = test_name;
        this.type = type;
        this.duration = duration;
        this.subjectCategoryList = subjectCategoryList;
    }

    public Long getSubject_id() {
        return subject_id;
    }

    public void setSubject_id(Long subject_id) {
        this.subject_id = subject_id;
    }

    public String getTest_name() {
        return test_name;
    }

    public void setTest_name(String test_name) {
        this.test_name = test_name;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Duration getDuration() {
        return duration;
    }

    public void setDuration(Duration duration) {
        this.duration = duration;
    }

    public Set<SubjectCategory> getSubjectCategoryList() {
        return subjectCategoryList;
    }

    public void setSubjectCategoryList(Set<SubjectCategory> subjectCategoryList) {
        this.subjectCategoryList = subjectCategoryList;
    }
}
