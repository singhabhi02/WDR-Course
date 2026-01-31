const express = require("express");
const app = express();

app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

//Authentication  middleware
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (token === "token123") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

app.get("/", (req, res) => {
  res.send("Welcome to express server");
});

app.post("/login", (req, res) => {
  res.json({ token: "token123" });
});

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Dashboard data");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
