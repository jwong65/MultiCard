import 'dotenv/config';
import express from 'express';

import {v4 as uuidv4 } from 'uuid'
const app = express();

// Middleware to extract json and make is accessible
app.use(express.json())
app.use(express.urlencoded({extended: true}))


let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
  };
  
  

app.get('/users', (req, res)=>{
    return res.send('Recieved a GET')
})

app.post('/users', (req, res)=>{
    const id =uuidv4();
    const message ={
        id,
        text: req.body.text,
    };
    messages[id] = message;
    return res.send(message)
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