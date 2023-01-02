import express, { json } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connect from './db/connect.js';
import { usersRouter } from './routes/users.js';
import { IOListRouter } from './routes/IOList.js';
dotenv.config();

const app = new express();

let port = process.env.PORT;
let connectionString = process.env.MONGO;

//middlewares
app.use (
    cors()
)
app.use (
    express.json()
)
//middleware for users api
app.use (
    "/api/v1/users",
    usersRouter
)

//middleware for users api
app.use (
    "/api/v1/signals",
    IOListRouter
)


let start = async () => {
    try {
        await connect (connectionString);
        app.listen(
            port, 
            console.log(
                `Server Up and running listening to port ${port}...OK`
            )
        )
    } catch (error) {
        console.log(error);
    }
}
start();