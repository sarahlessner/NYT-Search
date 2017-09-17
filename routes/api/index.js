const router = require("express").Router();
const ArticleRoutes = require("./Articles");

// Article routes
router.use("/Articles", ArticleRoutes);

module.exports = router;
