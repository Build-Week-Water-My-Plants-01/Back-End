const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// router imports
const authRouter = require("../routers/auth/auth-router.js");
const userRouter = require("../routers/users/user-router.js");
// middleware imports

const server = express();

// middlewares
server.use(helmet());
server.use(express.json());
server.use(cors());

// routers
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "is live!" });
});

module.exports = server;
