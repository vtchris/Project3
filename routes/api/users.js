const router = require("express").Router();
const userController = require("../../controllers/userController");

router.get('/', function (req, res) {
    res.json({ 'user': false });
});
router
    .route('/')
    .post(userController.create)

module.exports = router;