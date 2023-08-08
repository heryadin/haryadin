__path = process.cwd()
const express = require('express');
const cors = require('cors');
const path = require('path');
const createError = require('http-errors');
const app = express();

app.set('json spaces', 2)
app.use(cors())
app.use(express.json())
app.use(express.static('assets'))


app.get('/', (req, res) => {
    res.sendFile(__path + '/public/index.html')
	})


// Handling 404
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// App use error 404
app.use(function (req, res, next) {
	next(createError(404))
	})
	
app.use(function (err, req, res, next) {
	res.sendFile(__path + '/public/404.html')
	})
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
