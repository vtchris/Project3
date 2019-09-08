//routes/api/
const router = require("express").Router();
const userRoutes = require("./users");

// Login routes
router.use("/users", userRoutes);
// router.get('/', function(req, res) {
//     res.json({'success': true});
// });


module.exports = router;