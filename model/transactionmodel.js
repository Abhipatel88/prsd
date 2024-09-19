import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
    status:String,
    actype:String,
    amount:Number,
    companyname:String
})

export const transactions = mongoose.model('transactions', transactionSchema)