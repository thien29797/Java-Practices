package pro.thiendang.ManageStudentScore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;

@Entity
@Table(name = "student_information", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "student_code"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })
})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class StudentInformation {

    @Id
    @Column(length = 10)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long student_code;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Email
    @Column(name = "email")
    private String email;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "result_id", nullable = false)
    @JsonIgnore
    private TestResult testResult;


    public StudentInformation(String first_name, String last_name, @Email String email, TestResult testResult) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.testResult = testResult;
    }

    public Long getStudent_code() {
        return student_code;
    }

    public void setStudent_code(Long student_code) {
        this.student_code = student_code;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public TestResult getTestResult() {
        return testResult;
    }

    public void setTestResult(TestResult testResult) {
        this.testResult = testResult;
    }
}
