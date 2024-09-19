import mongoose from 'mongoose'



const companySchema = new mongoose.Schema({
    companyname:String,
    detail:String
})

export const company = mongoose.model('company', companySchema)