let express=require("express");
let cors=require("cors");
let connectDB=require("./config/db");
const userRoutes = require("./routes/UserRoutes");
let dotenv=require("dotenv");

//config environmental
dotenv.config();

let app=express();

//middlewares
app.use(express.json())
app.use(cors())


//routes
 app.use("/api/user",userRoutes)



//restApis
app.use("/",(req,res)=>{
    res.send("Welcome to BUYC Corp")
});




//port
let port= process.env.PORT || 8000;

//run or listen
app.listen(port,async()=>{
    try {
        await connectDB;
        console.log("Connected to the DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${port}`);
})