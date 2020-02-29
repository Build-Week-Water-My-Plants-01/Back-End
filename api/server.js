const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// router imports
// middleware imports

const server = express();

// middlewares
server.use(helmet());
server.use(express.json());
server.use(cors());

// routers

server.get("/", (req, res) => {
  res.status(200).json({ api: "is live!" });
});

module.exports = server;
