require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const JWTPRIVATEKEY = "Wisdom(2704)00110011"
const SALT = 10


const app = express();
const port = process.env.PORT || 8080;

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/bookings");
const serviceRoutes = require("./routes/services");
const ImageRoute = require("./routes/images");
const CustomerReportRoute = require('./routes/customerReport');

// DB connection
//const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@autochef.gqimjgr.mongodb.net/AutoChef?retryWrites=true&w=majority&appName=AutoChef`;
const uri = `mongodb+srv://cashong005:m6MQB1TxFbh5Oipn@autochef.gqimjgr.mongodb.net/AutoChef?retryWrites=true&w=majority&appName=AutoChef`

mongoose.connect(uri, {
  serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000 // 45 seconds
}).then(() => {
  console.log("Connected to MongoDB Atlas with Mongoose");
}).catch(err => {
  console.error("Failed to connect to MongoDB Atlas with Mongoose", err);
});

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/booking", bookRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/images", ImageRoute);
app.use("/api/customer-report", CustomerReportRoute);

app.listen(port, () => {
  console.log(`Listening on Port ${port}....`);
});
