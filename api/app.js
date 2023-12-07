import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { User } from './User.js';

const PORT = 3000;
const MONGO_URL = "mongodb://localhost:27017/Portafolio";
const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.get('/api/profile',async (req, res) => {

    const user = await User.find();


    res.status(200).send(user[0]);
});

app.post('/api/profile/:id', async (req, res) => {
    
    const user = await User.findById(req.params.id);

    const { type } = req.body;

    if(type === "personal"){
        const { name, email, city, year, description } = req.body;
        user.name = name;
        user.email = email;
        user.city = city;
        user.year = year;
        user.description = description;
    }else if(type === "skill"){
        const { title, description, path, skillIndex } = req.body;
        user.skills[skillIndex] = {title, description, path};
    }else if(type === "hobby"){
        const { title, description, activities } = req.body;
        user.hobbies.push({title, description, activities});
    }

    await user.save();

    res.status(200).send({message: "Perfil actualizado correctamente"});
});


mongoose.connect(MONGO_URL).then(()=>{
    app.listen(PORT, () => {
        console.log(`Listening on: http://localhost:${PORT}`)
      })
});