const express = require("express");
const app = express();

//created server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// created first route
app.get("/home", (req, res) => {
  res.send("Welcome to the express server");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, Name: "Prince" },
    { id: 2, Name: "Purva" },
  ]);
});

//use for POST API
app.use(express.json()); // Enable Json parsing

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == "admin" && password == "1234") {
    res.json({ message: "Login Successful" });
  } else {
    res.status(401).json({ message: "Login credientials Invalid" });
  }
});

//Middleware
app.use((req, res, next) => {
  console.log("Request Received");

  next(); //to pass the request to next middleware or route
});

//Middleware to modify data
app.use((req, res, next) => {
  req.user = "prem";

  next();
});

// Profile route
app.get("/profile", (req, res) => {
  res.send(`Hello  ${req.user}`);
});

//Authentication middleware
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (token === "secret123") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

//Dashboard middleware
app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Dashboard data");
});
