import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tb_tasks'})

export class Tasks{
    @PrimaryGeneratedColumn()
    id:number;

    @IsNotEmpty()
    @Column({length: 80, nullable: false})
    titulo:string;

    @IsNotEmpty()
    @Column({length: 150, nullable: true})
    descricao:string;

    @IsNotEmpty()
    @Column({nullable: true})
    data:Date;

    @IsNotEmpty()
    @Column({nullable: false})
    status:boolean;
}