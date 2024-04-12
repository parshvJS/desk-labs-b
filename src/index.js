import dotenv from "dotenv"
import app from "./app.js";
dotenv.config()


const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("the server is live with node.js")
})

app.listen(port,()=>{
    console.log("Server is up and running !")
})