import express from "express"
import dotenv from "dotenv"
import {router} from "./routers/router.js"

dotenv.config({path:"./config.env"});

const app=express();

let port = process.env.PORT || 3006;

app.use(express.urlencoded({extended:true}));

app.use(express.static("piblic"))

app.use("/api",router);

app.use((req,res)=>{
    console.log("Someone is trying to excsss a 404 router");
    res.status(404).json({message:"content not found"});
})


app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})