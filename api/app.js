import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { User } from './User.js';

const PORT = 3000;
const MONGO_URL = "mongodb+srv://marcos:marcos@cluster0.7ynbwt5.mongodb.net/Portafolio?retryWrites=true&w=majority";
const app = express();

app.use(cors());

app.get('/api/profile',async (req, res) => {

    const user = await User.findOne({email: "marcos.silva@alumnos.ucn.cl"});

    res.status(200).send(user);
});


mongoose.connect(MONGO_URL).then(()=>{
    app.listen(PORT, () => {
        console.log(`Listening on: http://localhost:${PORT}`)
      })
});