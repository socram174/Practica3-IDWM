import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        name: String, 
        email: String,
        city: String,
        year: String,
        description: String,
        skills: [{
            title: String,
            description: String,
            path: String
        }],
        hobbies: [{
            title: String,
            description: String,
            activities: [{
                title: String,
                path: String
            }]
        }]
        
    });
export const User = mongoose.model('User', UserSchema);