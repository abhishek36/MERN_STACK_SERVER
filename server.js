const express = require("express");
const connectDB = require("./config/db_config");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["PUT", "POST", "GET", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/book", require("./routes/BookRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, (req, res) => {
  console.log(`SERVER IS RUNNING ${PORT}`);
});
