package pro.thiendang.ManageStudentScore.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.NaturalId;
import pro.thiendang.ManageStudentScore.model.enums.Result;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.sql.Date;
import java.util.LinkedList;
import java.util.Set;

@Entity
@Table(name = "test_result")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class TestResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long result_id;

    @OneToMany(fetch = FetchType.LAZY)
    private Set<StudentInformation> studentInformationList;

    @OneToMany(fetch = FetchType.LAZY)
    private Set<SubjectCategory> subjectCategoryList;

    @Column(name = "submit_date")
    private Date submit_date;

    @Column(name = "score")
    @Size(min = 0, max = 10)
    private int score;

    @Enumerated(EnumType.STRING)
    @Column(name = "result")
    @NaturalId
    private Result result;

    public TestResult(Set<StudentInformation> studentInformationList, Set<SubjectCategory> subjectCategoryList, Date submit_date, @Size(min = 0, max = 10) int score, Result result) {
        this.studentInformationList = studentInformationList;
        this.subjectCategoryList = subjectCategoryList;
        this.submit_date = submit_date;
        this.score = score;
        this.result = result;
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

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }
}
