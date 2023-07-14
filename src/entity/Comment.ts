import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Like } from './Like';
import { User } from './User';

@Entity({name:'comments'})
export class Comment{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({type:'text'})
    comment!:string

    @ManyToOne(()=>User,user=>user.wroteComments)
    user!:User

    @ManyToOne(()=>Like,like=>like.likeComments,{lazy:true,onDelete:'CASCADE'})
    @JoinColumn({referencedColumnName:'userId',name:'toLike',foreignKeyConstraintName:'fk_likes_userId'})
    toLike!:Like
}