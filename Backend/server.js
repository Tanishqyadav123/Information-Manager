const express = require ("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()
const mongoose = require("mongoose")
const Userrouter = require("./routes/userRoute.js")


//  For converting the frontend data into json format we use a middleware :-
app.use(express.json())
app.use(cors())
app.use( "/users" ,  Userrouter)

let PORT = process.env.PORT || 8000

//  Database connectivity :- Connect node js to mongodb through mongoose 
 async function Main (){ 
    await mongoose.connect(process.env.MONGO_URI+ "/" + process.env.DATABASE_NAME );
}
Main().then(() =>{
     console.log("Database is connected successfully")
}).catch((error) =>{
     console.log("Some Error occured while connecting ", error)
})

app.get("/" , function (req , res) {     
      res.send("This is the backend part of the first Mern project...")     
})






//  Server is listening on the PORT number :-
app.listen (PORT , function () {
     console.log(`Server is running on the port ${process.env.PORT}`)
})