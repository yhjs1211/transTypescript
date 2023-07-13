import express from "express"
import cors from 'cors';
import cookie from 'cookie-parser';
import {connectDB} from './data-source';
import {router} from './routes/index';
const app = express();

app.use(express.json());
app.use(cors({
    origin:'*'
}));
app.use(cookie());

app.use('/',router);

connectDB().then(()=>{
    app.listen(8080,()=>{
        console.log('Server is running on Port 8080');
    });
});


