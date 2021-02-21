const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT || "8000"
const db = process.env.mongoURI
const bodyParser = require("body-parser");


// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Database connection
mongoose.connect(db,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        writeConcern: {
            j: true
        }
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

mongoose.connection.on('connected', () => console.log('Mongoose connected'))

// Simple request
app.get("/", (req, res) => {
    res.status(200).send(
        "CGI API"
    )
})

app.use('/users', require('./routes/userRouter'))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});