import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Menu } from './models/menuModel.js';
import menuRoute from './routes/menuRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing using express - for Postman
app.use(express.json());

//Middleware for handling CORS policy (Default is (*))
app.use(cors());

//Default is Get
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack')
});

app.use('/menu', menuRoute); //says we use '/menu' for prefix for all Routes in menuRoute

//Connect to Database - run only if data is successfuly
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        //Make sure app is connected to port
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error); //log error if app is not connected
    });

