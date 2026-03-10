import express, { type Request, type Response } from "express"
import { route } from "./routes.js"

const app =express()



app.use(express.json())
app.use("/api",route)
const Port =3000


app.listen(Port,()=>{
    console.log("hello je suis le serveur")
})