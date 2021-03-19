// build your server here and require it from index.js
const db = require("../data/db-config")

const express = require('express');

const server = express();

server.use(express.json());