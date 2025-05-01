import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { getConnection } from '../config/Connection.js'
import router from '../routes/OrganizacionRoute.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(process.env.PORT, ()=>{
    console.log(`Conectado al puerto: ${process.env.PORT}`)
    getConnection()
})