const Book = require("../model/BookModel");

const createBook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear) {
      res.status(400).json({ msg: "please fill all details" });
    }

    const book = await Book.create({
      title,
      author,
      publishYear,
    });

    if (!book) {
      res.status(400).json({ msg: "book not created" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.find();

    if (!book) {
      res.status(404).json({ msg: "book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({ msg: "book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!book) {
      res.status(401).json({ msg: "book not updated" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "book deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { createBook, getBook, getSingleBook, deleteBook, updateBook };
