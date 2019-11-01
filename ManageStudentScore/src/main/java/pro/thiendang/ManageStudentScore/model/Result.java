package pro.thiendang.ManageStudentScore.model;

import org.hibernate.annotations.NaturalId;
import pro.thiendang.ManageStudentScore.model.enums.ResultEnum;

import javax.persistence.*;

@Entity
@Table(name = "result_data")
public class Result {

    @Id
    @Column(name = "result_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "result_name")
    @NaturalId
    private ResultEnum resultEnum;

    public Result(ResultEnum resultEnum) {
        this.resultEnum = resultEnum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ResultEnum getResultEnum() {
        return resultEnum;
    }

    public void setResultEnum(ResultEnum resultEnum) {
        this.resultEnum = resultEnum;
    }
}
