import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import cors from "cors";
//ths is a miidleware (a browser security feature that allows web applications to access resources from other domains as in 5317 domain frontend runnig and in 4001 backend so error will come as by api when we fetch data from backend shows error


// all route define
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
/*used type module in package.json so that in here in backend we can use import syntax */
const app = express();

app.use(cors());
app.use(express.json()); //postman body is json format

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,  //for local computer dwnld of mong w need to give this
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);  //gotoroute
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});