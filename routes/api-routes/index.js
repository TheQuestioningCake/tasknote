const router = require("express").Router();
const notesRoute = require("./notes-route");

router.use(notesRoute);

module.exports = router;