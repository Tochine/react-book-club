const mongoose = require('mongoose');

require('../db/server');

const Book = mongoose.model('Book', {
	name: {
		type: String,
		required: true,
		unique: true
	}, 
	price: {
		type: Number,
		default: 0
	},
	description: {
		type: String
	}
});

module.exports = Book;