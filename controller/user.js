import express from 'express'
import { login } from '../model/login.js'


export const loginuser = async (req,res)=>{
    try {
        const {email, password} = req.body
        const userss = await login.findOne({email})
        if(!userss) return res.status(404).json({message: 'User not found'})
        if(userss.password !== password){
            return res.status(400).json({message: 'Invalid credentials'})
        }
        if(userss){
            return res.json({message: 'Login success'})
        }
    } catch (error) {
        console.log(error);
        
    }
}