package pro.thiendang.ManageStudentScore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "student_information", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "student_code"
        })
})
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
@AllArgsConstructor
public class StudentInformation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "student_code", length = 10)
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
    @JoinColumn(name = "test_result_code", nullable = false)
    @JsonIgnore
    private TestResult testResult;

    public StudentInformation(String first_name, String last_name, @Email String email) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
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

    @Override
    public String toString() {
        return "StudentInformation{" +
                "student_code=" + student_code +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
