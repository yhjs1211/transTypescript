import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm"
import { Post } from "./Post"
import { Like } from "./Like"
import { Comment } from "./Comment"


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

    @OneToMany(()=>Post, post => post.user,{cascade:true})
    wrotePosts!:Post[]

    @OneToMany(()=>Comment, comment => comment.user,{cascade:true})
    wroteComments!:Comment[]
}
