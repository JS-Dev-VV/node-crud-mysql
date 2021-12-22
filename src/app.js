const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require('dotenv').config();
const { handler } = require('./handlers/index')

const startServer = async () => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: "application/json" }));
    app.use(bodyParser.urlencoded({ extended: false }));
    const port = process.env["APP_PORT"]
    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    });
    app.use('/v1', handler);
};

startServer().catch((err) => {
    console.log(err);
});