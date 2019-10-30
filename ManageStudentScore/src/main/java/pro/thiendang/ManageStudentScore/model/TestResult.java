package pro.thiendang.ManageStudentScore.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "test_result")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
@AllArgsConstructor
public class TestResult implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "test_result_code")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long result_id;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "testResult", cascade = CascadeType.ALL)
    private Set<StudentInformation> studentInformationList;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "testResult", cascade = CascadeType.ALL)
    private Set<SubjectCategory> subjectCategoryList;

    @Column(name = "submit_date")
    private Date submit_date;

    @Column(name = "score")
    @Size(min = 0, max = 10)
    private int score;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "testresult_result",
        joinColumns = @JoinColumn(name = "test_result_code"),
        inverseJoinColumns = @JoinColumn(name = "result_id"))
    private Set<Result> result = new HashSet<>();

    public TestResult(Set<StudentInformation> studentInformationList, Set<SubjectCategory> subjectCategoryList, Date submit_date, @Size(min = 0, max = 10) int score, Set<Result> result) {
        this.studentInformationList = studentInformationList;
        this.subjectCategoryList = subjectCategoryList;
        this.submit_date = submit_date;
        this.score = score;
        this.result = result;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getResult_id() {
        return result_id;
    }

    public void setResult_id(Long result_id) {
        this.result_id = result_id;
    }

    public Set<StudentInformation> getStudentInformationList() {
        return studentInformationList;
    }

    public void setStudentInformationList(Set<StudentInformation> studentInformationList) {
        this.studentInformationList = studentInformationList;
    }

    public Set<SubjectCategory> getSubjectCategoryList() {
        return subjectCategoryList;
    }

    public void setSubjectCategoryList(Set<SubjectCategory> subjectCategoryList) {
        this.subjectCategoryList = subjectCategoryList;
    }

    public Date getSubmit_date() {
        return submit_date;
    }

    public void setSubmit_date(Date submit_date) {
        this.submit_date = submit_date;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Set<Result> getResult() {
        return result;
    }

    public void setResult(Set<Result> result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return "TestResult{" +
                "result_id=" + result_id +
                ", studentInformationList=" + studentInformationList +
                ", subjectCategoryList=" + subjectCategoryList +
                ", submit_date=" + submit_date +
                ", score=" + score +
                ", result=" + result +
                '}';
    }
}
