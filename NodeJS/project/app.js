const express = require("express");
const app = express();

const UserRoutes = require("./routes/users");

app.use("/users", UserRoutes);

app.listen(3000, () => {
  console.log("Server is started on 3000");
});
