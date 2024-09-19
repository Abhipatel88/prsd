// import express from 'express'
// const mongoose = require("mongoose");
import mongoose from 'mongoose'

import {userdat} from './data.js'
import { login } from '../model/login.js'

const initdb= async ()=>{
    await login.insertMany(userdat.datas)
  console.log("data was initialized");

}
initdb()