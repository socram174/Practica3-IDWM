import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { User } from './User.js';

const PORT = 3000;
const MONGO_URL = "mongodb+srv://marcos:marcos@cluster0.7ynbwt5.mongodb.net/Portafolio?retryWrites=true&w=majority";
const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.get('/api/profile',async (req, res) => {

    const user = await User.findOne({email: "marcos.silva@alumnos.ucn.cl"});

    res.status(200).send(user);
});

app.post('/api/profile', async (req, res) => {
    
    const user = await User.findById(req.params.id);

    const { type } = req.body;
});


mongoose.connect(MONGO_URL).then(()=>{
    app.listen(PORT, () => {
        console.log(`Listening on: http://localhost:${PORT}`)
      })
});