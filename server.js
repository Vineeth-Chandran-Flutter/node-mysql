import express from "express";
import mysql from "mysql2";
import userRoute from "./routes/userRoute.js";
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Vineeth@123",
    database:"userdb"
})
conn.connect(function(err){
    if(err) throw err;
    console.log("Database connected");
})

const app=express();

app.use(express.json());
app.use("/",userRoute)

app.listen(3000,()=>console.log("server connected"));