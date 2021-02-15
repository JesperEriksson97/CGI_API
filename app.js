const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || "8000"

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