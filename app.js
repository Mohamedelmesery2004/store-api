require("dotenv").config();
const express = require("express");
const app = express();

const errHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const connectDB = require("./db/connect");
const productsRoutes = require("./routes/products");

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Node js");
});

// Products routes
app.use("/api/v1/products", productsRoutes);

// Not found and error handlers (AFTER routes)
app.use(notFound);
app.use(errHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.Mongo_Url);
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
