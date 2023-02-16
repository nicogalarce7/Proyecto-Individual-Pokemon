const { Router } = require("express");
const {getTypes} = require("../Controllers/allTypes.controller")

const router = Router();

router.get('/', getTypes);

module.exports = router;