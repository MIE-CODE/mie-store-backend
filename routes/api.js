const express = require("express");
const Product = require("../models/product");
const router = express.Router();
module.exports = router;
router.get("/", (req, res) => {
  res.send({ PoweredBy: "MIE-TECH" });
});
router.get("/products", (req, res) => {
  Product.find()
    .sort({ createdAt: -1 })
    .then((response) => {
      res.send(response);
    });
});
router.post("/products", (req, res) => {
  Product.create(req.body).then((result) => {
    res.send(result);
    console.log("posted");
  });
});
router.put("/products/:id", (req, res) => {
  const id = req.params.id;
  Product.findByIdAndUpdate({ _id: id }, req.body).then((result) => {
    console.log("updated");
    res.send(result);
  });
});
router.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete({ _id: id }).then((result) => {
    console.log("Deleted");
    res.send(result);
  });
});
