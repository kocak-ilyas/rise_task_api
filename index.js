const app = require("express")();

const routes = require("./app/routes.js");
const PORT = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "HEAD, GET, POST, PUT, PATCH, DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Range");
  res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept, Range");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use("/api", routes);
app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
