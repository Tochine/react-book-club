const express = require('express');
const bodyParser = require('body-parser');

// in the same directory use './' else it will refer to the node-module directory
const Book = require('./models/book')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('hello');
});

app.get('/books', (req, res) => {
	res.send([
	{
		name:"coding wiith Tochi",
		price:6000
	},

	{
		name:"coding wiith Tochi",
		price:6000
	},

	{
		name:"coding wiith Tochi",
		price:6000
	}


		]);
});

/* save() is a promise.
async works with await. you can't use await without async */

app.post('/books', async (req, res) => {
	// const book = new Book ({
	// 	name: req.body.name,
	// 	price: req.body.price,
	// 	description: req.body.description
	// });



/* destructuring */
const { name, price, description } = req.body;
	const book = new Book ({
		name,
		price,
		description
	});

	try {
		await book.save(); 
		console.log("Book saved");
		res.send(book);

	} catch (error) {
		console.log("Error! Book did not save");
		res.send(error);
	}

	});

app.listen(9001, () => {
	console.log("The server is running on port 9001");
});