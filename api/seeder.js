import mongoose from "mongoose";
import { User } from "./User.js";

const seed = async () =>{
    await mongoose.connect('mongodb+srv://marcos:marcos@cluster0.7ynbwt5.mongodb.net/Portafolio?retryWrites=true&w=majority');

const info = {
    name: "Marcos Silva",
    email: "marcos.silva@alumnos.ucn.cl",
    city: "Santiago de Chile",
    year: 2023,
    description: "Soy estudiante de Ing. civil en computación e informatica de la Universidad Catolica del Norte en Antofagasta y me insteresa el desarrollo web",
    skills: [
        {
            title: "React",
            description: "He ganado algo de experiencia en react gracias a proyectos personales y de la universidad.",
            path: "https://react.dev/images/og-home.png"
        },
        {
            title: "Nodejs/express",
            description: "Este es el unico framework de backend que he utilizado hasta el momento.",
            path: "https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg"
        },
        {
            title: "MongoDB",
            description: "Es la base de datos que mas he usado despues de mysql. Para almacenar datos desde codigo hecho en javascript como codigo hecho en python para un scraper.",
            path: "https://www.datanami.com/wp-content/uploads/2023/06/mongodb-logo-vector-2022.png"
        },
        {
            title: "Python",
            description: "Tengo algo de experiencia haciendo web scraping para luego esa informacion guardarla en mongodb o mysql.",
            path: "https://ipappg.edu.pe/blog/wp-content/uploads/2022/05/20160721020723_python-logo.webp"
        }
    ],
    hobbies: [
        {
            title: "Videojuegos",
            description: "Mi gusto por los videojuegos comenzó cuando tenía aproximadamente 5 años, edad en la que jugué por primera vez Sonic en un PC. En general, disfruto de todo tipo de videojuegos, especialmente si son multijugador. El año 2018 comence a jugar Fortnite (y lo sigo jugando) de manera mas frecuente desplazando como juego principal a Warframe. No obstante, mi juego favorito y el que nunca jamas será reemplazado por ningún otro es toda la saga de God of War.",
            activities: [
                {
                    title: "God of War",
                    path: "/images/GOW.webp"
                },
                {
                    title: "Fortnite",
                    path: "/images/fortnite.png"
                },
                {
                    title: "Destiny 2",
                    path: "/icons/Destiny2/icons8-destiny-2-100.svg"
                },
                {
                    title: "Warframe",
                    path: "/icons/Warframe/icons8-warframe-96.svg"
                }
            ]
        }
    ]

}

//Delete every user
await User.deleteMany({});

await User.create(info);

await mongoose.connection.close();

console.log("Database seeded!");
}

seed();