console.log("working")
import express from "express"
import dbConnection from "./db.js"
//insitating server
const app=express();
//middleware
app.use(express.json())
//PORT
const PORT=9009
//check server
app.get("/",(req,res)=>{
    res.send("server response given")
});
//initialling db
dbConnection();

//listening to a server
app.listen(PORT,()=>console.log(`server listening in localhost: ${PORT}`))