const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world')
});

app.listen(3333, () => console.log('Server stated at http://localhost:3333'));