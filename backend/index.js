require('dotenv').config()
const express = require('express');
const cors = require("cors")
const routes = require('./src/routes')
const app = express();

app.use(cors())
app.use("/api", routes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Backend is running in port: ${port}`))

module.exports = app