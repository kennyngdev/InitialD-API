import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    manufacturer: string;

    @Column()
    name: string;

    @Column()
    model: string;

    @Column({ nullable: true })
    year: number;

    @Column({ nullable: true })
    weight: number;

    @Column({ nullable: true })
    engine: string;

    @Column({ nullable: true })
    power: number 

    @Column({ nullable: true })
    torque: number    

}
