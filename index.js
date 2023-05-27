let express=require("express");
let cors=require("cors");
let connectDB=require("./config/db");
const userRoutes = require("./routes/UserRoutes");
let dotenv=require("dotenv");
const OEM_SpecsRoutes = require("./routes/OEM_Specs_Routes");
const MarketPlace_inventory_Routes = require("./routes/MarketPlace_Inventory_Routes");
let cloudinary=require("cloudinary");


//config environmental
dotenv.config();

//cloudinaryConfigs

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });




let app=express();

//middlewares
app.use(express.json())
app.use(cors())


//routes
 app.use("/api/user",userRoutes)
 app.use("/api/OEM_Specs",OEM_SpecsRoutes)
 app.use("/api/marketPlace_Inventory",MarketPlace_inventory_Routes);



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