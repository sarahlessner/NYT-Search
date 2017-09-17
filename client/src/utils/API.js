import axios from "axios";

export default {
  // Gets all Articles from DB
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Queries Articles
  searchArticle: function(query, begin, end) {
    return axios.get("/api/findarticles/", { params: { q: query, begin_date: begin, end_date: end}});
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
