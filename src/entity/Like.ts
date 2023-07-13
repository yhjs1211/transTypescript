import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LikeWhat } from './LikeWhat';
import { User } from './User';
import { Post } from './Post';
import { Comment } from './Comment';


@Entity({name:'likes'})
export class Like{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({type:'enum',nullable:false,enum:LikeWhat})
    type!:LikeWhat

    @Column()
    contentId!:number

    @Column({nullable:true})
    userId!:number

    @ManyToOne(()=>User, (user)=> user.userToLike,{cascade:true})
    user!: User

    @ManyToOne(()=>Post, (post)=>post.postToLike,{cascade:true})
    post!: Post

    @ManyToOne(()=>Comment, (comment)=>comment.commentToLike,{cascade:true})
    comment!: Comment
}