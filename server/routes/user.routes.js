const router = require("express").Router();
const usersCtrl = require("../controllers/user.controller");

router.post("/signup", usersCtrl.singup);
router.post("/signin", usersCtrl.signin);
router.get("/logout", usersCtrl.logout);

module.exports = router;
