const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || "8000"

// Simple request
app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs")
})

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});