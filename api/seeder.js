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
                    path: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg"
                },
                {
                    title: "Fortnite",
                    path: "https://cdn2.unrealengine.com/fortnite-chapter-4-og-overview-page-key-art-bg-1920x1080-1fbc3a1c0297.jpg"
                },
                {
                    title: "Destiny 2",
                    path: "https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltfd59ef77fa3c5cc1/63d01595a5695963fc8be4ef/lfl-media-wallpaper-1-full.jpg"
                },
                {
                    title: "Warframe",
                    path: "https://www-static.warframe.com/images/longlanding/warframe-metacard.png"
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