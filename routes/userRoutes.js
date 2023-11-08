const {register, login, setAvatar, getallusers} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/login",login);
router.post("/register",register);
router.get("/allusers/:id", getallusers);
router.post("/setavatar/:id",setAvatar)
module.exports = router;
 