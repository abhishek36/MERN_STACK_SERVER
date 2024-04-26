const express = require("express");
const {
  createBook,
  getBook,
  getSingleBook,
  deleteBook,
  updateBook,
} = require("../controllers/BookControllers");

const router = express.Router();

router.post("/create", createBook);
router.get("/", getBook);
router.get("/:id", getSingleBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

module.exports = router;
