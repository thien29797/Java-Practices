package pro.thiendang.ManageStudentScore.model;

import org.hibernate.annotations.NaturalId;
import pro.thiendang.ManageStudentScore.model.enums.DurationEnum;

import javax.persistence.*;

@Entity
@Table(name = "duration_data")
public class Duration {

    @Id
    @Column(name = "duration_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "duration_name")
    @NaturalId
    private DurationEnum durationEnum;

    public Duration(DurationEnum durationEnum) {
        this.durationEnum = durationEnum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public DurationEnum getDurationEnum() {
        return durationEnum;
    }

    public void setDurationEnum(DurationEnum durationEnum) {
        this.durationEnum = durationEnum;
    }

    @Override
    public String toString() {
        return "Duration{" +
                "id=" + id +
                ", durationEnum=" + durationEnum +
                '}';
    }
}
