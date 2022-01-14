const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();

const travelRoutes = require("./routes/travel");

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  next();
});

app.use(travelRoutes);

app.use((err, req, res, next) => {
  const { message, status } = err;
  return res.status(status || 500).json({ error: message });
});

const server = http.createServer(app);

server.listen(4000);
