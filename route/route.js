const exp = require('express');
const router = exp.Router();
const mainpageController = require("../controller/mainpageController");
router.get("/", mainpageController.controller);
exports.route = router;