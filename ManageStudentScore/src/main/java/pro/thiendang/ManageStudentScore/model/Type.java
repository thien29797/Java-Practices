package pro.thiendang.ManageStudentScore.model;

import org.hibernate.annotations.NaturalId;
import pro.thiendang.ManageStudentScore.model.enums.TypeEnum;

import javax.persistence.*;

@Entity
@Table(name = "type")
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_name")
    @NaturalId
    private TypeEnum typeEnum;

    public Type(TypeEnum typeEnum) {
        this.typeEnum = typeEnum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TypeEnum getTypeEnum() {
        return typeEnum;
    }

    public void setTypeEnum(TypeEnum typeEnum) {
        this.typeEnum = typeEnum;
    }

    @Override
    public String toString() {
        return "Type{" +
                "id=" + id +
                ", typeEnum=" + typeEnum +
                '}';
    }
}
