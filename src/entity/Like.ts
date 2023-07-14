import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { LikeWhat } from './LikeWhat';
import { User } from './User';
import { Post } from './Post';
import { Comment } from './Comment';


@Entity({name:'likes'})
export class Like{

    @PrimaryColumn()
    @OneToOne(()=>User,{onUpdate:'CASCADE',onDelete:'CASCADE'})
    @JoinColumn({referencedColumnName:'id',name:'userId',foreignKeyConstraintName:'fk_user_id'})
    userId!:number

    @OneToMany(()=>Post,post=>post.toLike)
    likePosts!:Post[]

    @OneToMany(()=>Comment,comment=>comment.toLike)
    likeComments!:Comment[]
}