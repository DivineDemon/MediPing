const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Routes Import
const authRoute = require("./routes/auth");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Base Route Working!" });
});
app.use("/auth", authRoute);

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
