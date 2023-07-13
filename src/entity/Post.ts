import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Like } from "./Like";

@Entity({name:'posts'})
export class Post{

    @PrimaryGeneratedColumn()
    id!:string

    @Column()
    title!:string

    @Column()
    content!:string
    
    @OneToMany(()=>Like, (like)=>like.post)
    postToLike!:number
}