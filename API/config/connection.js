const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose
            .connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("MongoDB Connected successfully");
            })

    } catch (error) {
        console.log(`somer error occur ${error}`);
    }


}

module.exports = connectDB;

