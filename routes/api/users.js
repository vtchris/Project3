const router = require("express").Router();
const userController = require("../../controllers/userController");
var passport = require("../../config/passport");

router.get('/', function (req, res) {
    res.json({ 'user': false });
});
router
    .route('/enroll')
    .post(userController.create)
router.post('/login',passport.authenticate("local"), function (req, res) {
    res.json(req.user);
});
router.post('/status',passport.authenticate("local"), function (req, res) {
    res.json(req.user);
});
module.exports = router;