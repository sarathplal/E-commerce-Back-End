// Loads env variables into process.env by default
require('dotenv').config()

// require 
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server started running at port : ${PORT}`);
})

server.get('/', (req, res) => {
    res.status(200).json("Ecart Server started running")
})