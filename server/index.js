import express from 'express'; //
import dotenv from 'dotenv'; //2
import { connectDb } from './database/db.js';

const app = express();

app.get('/',(req,res)=>{
    res.send('Server is Working');
})

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
    connectDb();
});


dotenv.config();
