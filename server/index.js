import express from 'express'; //1
import dotenv from 'dotenv'; //2
import { connectDb } from './database/db.js';

const app = express();

// using middleware

app.use(express.json());

app.get("/",(req,res)=>{
    res.send('Server is Working');
})

//importing routes
import userRoutes from "./routes/user.js"

//Using routes
app.use("/api",userRoutes)

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
    connectDb();
});

dotenv.config();
