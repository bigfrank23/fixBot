const express = require("express");
const app = express();
const PORT = process.env.port || 5000;
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const URL = require("./routes/endpoints");

dotenv.config();
app.use(express.json());
app.use(cors());

//Database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true
    // useCreateIndex: true
  })
  .then(console.log("Database connection successful!"))
  .catch((err) => console.log(err));

app.use("/api/url", URL);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Backend is runnig on port ${PORT}!`)); 
