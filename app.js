const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT || "8000"

// Database connection
const db = process.env.mongoURI
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