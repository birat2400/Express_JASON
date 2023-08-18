const express = require("express");
const qrKoRouter = require("./routes");
const app = express();

app.use(express.json());
app.use("/", qrKoRouter);

app.listen(2010);
console.log("plaese work");
