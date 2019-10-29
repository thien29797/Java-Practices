package pro.thiendang.ManageStudentScore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "subject_category", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "category_code"
        })
})
public class SubjectCategory {

    @Id
    @Column(length = 10)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long category_code;

    @Column(name = "category_name")
    private String category_name;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "result_id", nullable = false)
    @JsonIgnore
    private TestResult testResult;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "subject_id", nullable = false)
    @JsonIgnore
    private TestSubject testSubject;

    public SubjectCategory(String category_name, TestResult testResult, TestSubject testSubject) {
        this.category_name = category_name;
        this.testResult = testResult;
        this.testSubject = testSubject;
    }

    public Long getCategory_code() {
        return category_code;
    }

    public void setCategory_code(Long category_code) {
        this.category_code = category_code;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    public TestResult getTestResult() {
        return testResult;
    }

    public void setTestResult(TestResult testResult) {
        this.testResult = testResult;
    }

    public TestSubject getTestSubject() {
        return testSubject;
    }

    public void setTestSubject(TestSubject testSubject) {
        this.testSubject = testSubject;
    }
}
