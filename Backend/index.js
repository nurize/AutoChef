require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/bookings")
const serviceRoutes = require("./routes/services")
const ImageRoute = require("./routes/images")



// DB connection
connection();


// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/booking", bookRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/images", ImageRoute);


app.listen(port, () => {
    console.log(`Listening on Port ${port}....`);
})
