//Load all required modules 
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");


//Database URL Details 
let url = "mongodb://localhost:27017/meanstack";

//unable to load the static file
app.use(express.static(process.cwd()));


// load the frontend file in angular program
app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors()); // enable cors policy

//Database connection without warning 
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);   //ready to connect 

//Connect the data 
mongoose.connection

//link to router module 
var Product = require("./router/product.router.js");

//URL 
//http://localhost:9090/product/allProductDetails 
//http://localhost:9090/product/retrieveProductById/101
//http://localhost:9090/product/storeProductDetails
//http://localhost:9090/product/deleteProductById/101
//http://localhost:9090/product/updateProductPrice

//Middleware 
app.use("/product",Product)

app.listen(9090,()=>console.log("Server running on port number 9090"));

