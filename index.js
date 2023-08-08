const express = require('express');
const app = express();

app.set('json spaces', 2)
app.use(cors())
app.use(express.json())
app.use(express.static('assets'))


app.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html')
})


// Handling 404
app.use(function (req, res, next) {
    res.status(404).sendFile('./views/index.html')
})

app.get('/test', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server active port 3000 ✓');
});