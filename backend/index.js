import 'dotenv/config';
import express from 'express';

import {v4 as uuidv4 } from 'uuid'
const app = express();


app.get('/users', (req, res)=>{
    return res.send('Recieved a GET')
})

app.post('/users', (req, res)=>{
    return res.send('Recievved a POST')
})

app.put('/users/:userId', (req, res)=>{
    return res.send(`Recieved a PUT on user/${req.params.userId}`)
})

app.delete('/users/:userId', (req, res)=>{
    return res.send(`Recieved a DELETE on user/${req.params.userId}`)
})

app.listen(process.env.PORT, ()=>{
    console.log(`App listening on ${process.env.PORT}`)
})