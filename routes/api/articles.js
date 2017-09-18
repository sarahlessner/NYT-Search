const axios = require("axios");
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles to find all saved and to create saved"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id to delete"
router
  .route("/:id")
  .delete(articlesController.remove);

//queries NYT api for articles based on user input
router.route("/find")


module.exports = router;
