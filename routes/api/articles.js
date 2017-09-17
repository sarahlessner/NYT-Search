const axios = require("axios");
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

//API key 7e989fab4dfe40ab9a68b494a64c7fd3
router.get("/findarticles", (req, res) => {
  console.log(req);
    axios

      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7e989fab4dfe40ab9a68b494a64c7fd3", { params: req.query})
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

module.exports = router;
