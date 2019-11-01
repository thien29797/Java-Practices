package pro.thiendang.ManageStudentScore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "subject_category", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "category_code"
        })
})
@Data
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class SubjectCategory implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "category_code", length = 10)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long category_code;

    @Column(name = "category_name")
    private String category_name;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "test_subject_code")
    private TestSubject testSubject;

    public SubjectCategory(String category_name, TestSubject testSubject) {
        this.category_name = category_name;
        this.testSubject = testSubject;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
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

    public TestSubject getTestSubject() {
        return testSubject;
    }

    public void setTestSubject(TestSubject testSubject) {
        this.testSubject = testSubject;
    }

    @Override
    public String toString() {
        return "SubjectCategory{" +
                "category_code=" + category_code +
                ", category_name='" + category_name + '\'' +
                ", testSubject=" + testSubject +
                '}';
    }
}
