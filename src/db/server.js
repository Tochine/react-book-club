const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/book-api", {
	useNewUrlParser: true,
	useCreateIndex: true
});