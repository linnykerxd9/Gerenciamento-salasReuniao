package one.digital.crud.saladereuniao.saladereuniao.model;


import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "meetingroom")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "date",nullable = false)
    private String date;

    @Column(name = "starHour",nullable = false)
    private String startHour;

    @Column(name = "endHour",nullable = false)
    private String endHour;

}
