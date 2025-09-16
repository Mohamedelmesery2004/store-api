require("dotenv").config();

const connectDB = require("./db/connect");
const product = require("./models/product");
const productJson = require("./products.json")
const start = async()=>{
    try {
        await connectDB(process.env.Mongo_Url);
        await product.deleteMany();
        await product.create(productJson);
        console.log("success")
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
start();