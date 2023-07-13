import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Like } from './Like';

@Entity({name:'comments'})
export class Comment{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({type:'text'})
    comment!:string

    @OneToMany(()=>Like, (like)=>like.comment)
    commentToLike!:number
}