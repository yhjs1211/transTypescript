import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm"
import { Post } from "./Post"
import { Like } from "./Like"


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nickname!: string

    @Column()
    name!: string

    @Column({unique:true})
    email!: string

    @Column()
    password!: string

    @OneToMany(()=>Like,like => like.userId)
    userToLike!:number
}
