import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Like } from "./Like";
import { User } from "./User";

@Entity({name:'posts'})
export class Post{

    @PrimaryGeneratedColumn()
    id!:string

    @Column()
    title!:string

    @Column({type:'text'})
    content!:string

    @ManyToOne(()=>User, (user)=>user.wrotePosts,{onDelete:'CASCADE'})
    user!:User
    
    @ManyToOne(()=>Like, like=>like.likePosts,{lazy:true})
    @JoinColumn({referencedColumnName:'userId',name:'toLike'})
    toLike!:Like
}