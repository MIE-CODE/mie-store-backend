const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const { default: mongoose, connect } = require("mongoose");
const app = express();
const port = 5050;
const dbURI =
  "mongodb+srv://MIE:meyangs126@cluster0.slzl1aq.mongodb.net/mie-store-backend?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(process.env.port || port, () => {
      console.log("connected to db");
      console.log(`lstening for request on port ${port}...`);
    });
  })
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use("/api", routes);
app.use((err, req, res, next) => {
  res.status(422).send({ error: err._message });
  console.log(err);
});
