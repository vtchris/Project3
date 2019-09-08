const router = require("express").Router();
var path = require("path");
const htmlRoutes = require("./html");

router.use("/", htmlRoutes);


module.exports = router;