const library = require("../models/book-model");

exports.getBooks = (req, res, next) => {
  library.find({}, (error, library) => {
    if (error) next(error);
    req.data = library;
    next();
  });
};

exports.getaBook = (req, res, next) => {
  let booknum = req.params.booknum;
  if (booknum == "1") {
    library.findOne({ name: "Hand on Hacking" }, (error, library) => {
      if (error) next(error);
      req.data = library;
      console.log(req.data);
      res.render(booknum, { books: req.data });

    });
  } else if (booknum == "2") {
    library.findOne({ name: "Learning Python" }, (error, library) => {
        if (error) next(error);
        req.data = library;
        res.render(booknum, { books: req.data });
      }
    );
  } else if (booknum == "3") {
    library.findOne({ name: "Wireshark 101" },(error, library) => {
        if (error) next(error);
        req.data = library;
        res.render(booknum, { books: req.data });
      }
    );
  }
};