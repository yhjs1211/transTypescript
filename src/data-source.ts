import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Post } from './entity/Post'
import { Comment } from './entity/Comment'
import { Like } from "./entity/Like"
import config from './ignored/config'


const AppDataSource = new DataSource({
    type: "mysql",
    host: config.db.host,
    port: 3306,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    synchronize: true,
    logging: false,
    entities: [User,Post,Comment,Like],
    migrations: [],
    subscribers: [],
    dateStrings:true
});

export const connectDB = async ():Promise<void> => {
    await AppDataSource.initialize().then(()=>{
        console.log('connected DB!');
    }).catch(console.error);
}