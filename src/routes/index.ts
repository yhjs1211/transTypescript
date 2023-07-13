import {router as postRouter}  from './post.route';
import {router as userRouter}  from './user.route';
import {router as commentRouter}  from './comment.route';
import {router as likeRouter}  from './like.route';
import { Router } from 'express';

type TypeRouter = {
    path:string,
    router:Router
}

const defaultRouters : TypeRouter[] = [
    {
        path:'/posts',
        router: postRouter
    },
    {
        path:'/users',
        router:userRouter
    },
    {
        path:'/comments',
        router:commentRouter
    },
    {
        path:'/likes',
        router:likeRouter
    },
];

export const router = Router();

defaultRouters.forEach(v=>{
    router.use(v.path,v.router)
});