import mongoose from 'mongoose'
// mongoose.connect("mongodb://127.0.0.27017/abhipracice")
mongoose.connect("mongodb://127.0.0.1:27017/abhipracice-web")


const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

export const login = mongoose.model('login', userSchema)