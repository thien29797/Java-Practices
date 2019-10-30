package pro.thiendang.ManageStudentScore.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "test_subject")
@Data
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class TestSubject implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "test_subject_code")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subject_id;
    
    @Column(name = "test_name")
    private String test_name;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "testsubject_type",
            joinColumns = @JoinColumn(name = "test_subject_code"),
            inverseJoinColumns = @JoinColumn(name = "type_id"))
    private Set<Result> type = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "testsubject_duration",
            joinColumns = @JoinColumn(name = "test_subject_code"),
            inverseJoinColumns = @JoinColumn(name = "duration_id"))
    private Set<Result> duration = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "testSubject", cascade = CascadeType.ALL)
    private Set<SubjectCategory> subjectCategoryList;

    public TestSubject(String test_name, Set<Result> type, Set<Result> duration, Set<SubjectCategory> subjectCategoryList) {
        this.test_name = test_name;
        this.type = type;
        this.duration = duration;
        this.subjectCategoryList = subjectCategoryList;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
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

    public Set<Result> getType() {
        return type;
    }

    public void setType(Set<Result> type) {
        this.type = type;
    }

    public Set<Result> getDuration() {
        return duration;
    }

    public void setDuration(Set<Result> duration) {
        this.duration = duration;
    }

    public Set<SubjectCategory> getSubjectCategoryList() {
        return subjectCategoryList;
    }

    public void setSubjectCategoryList(Set<SubjectCategory> subjectCategoryList) {
        this.subjectCategoryList = subjectCategoryList;
    }

    @Override
    public String toString() {
        return "TestSubject{" +
                "subject_id=" + subject_id +
                ", test_name='" + test_name + '\'' +
                ", type=" + type +
                ", duration=" + duration +
                ", subjectCategoryList=" + subjectCategoryList +
                '}';
    }
}
