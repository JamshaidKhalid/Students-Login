const express = require("express");
const app = express();
const bodyparser = require('body-parser');


require("dotenv").config();
const PORT = process.env.PORT || 8080;
const connectDB = require("./config/connection")


app.use(bodyparser.json()); // for parsing application/json
app.use(bodyparser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use("/api/auth", require("./routes/users"));

// connnecting with mongoDB
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
