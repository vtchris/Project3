const router = require("express").Router();
const path = require("path");


router.get("/enroll", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/enroll");
    }
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
  });

  module.exports = router;