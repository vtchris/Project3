const router = require("express").Router();

router.get('/', function(req, res) {
    res.json({'user': false});
});

module.exports = router;