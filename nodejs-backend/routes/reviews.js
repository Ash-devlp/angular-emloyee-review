var express = require("express");
var router = express.Router();
var review = require("../models/review");

router.get("/:id", function (req, res, next) {
  console.log("get employee reviews");
  review
    .getUserReviews(req.params.id)
    .then((result) => {
      console.log("getting employee reviews", result[0]);
      res
        .status(201)
        .json({ message: " employee reviews recieved", obj: result[0] });
    })
    .catch((err) => {
      console.log("get  employee reviews err", JSON.stringify(err));
      return res.status(500).json({ title: "An error occured", error: err });
    });
});
module.exports = router;
