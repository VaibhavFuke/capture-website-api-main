const helpers = require('./helpers.js');
const express = require('express');

const port = process.env.PORT || 8080;
const app = express();
app.use(express.static('profiles'));
app.get('/capture', helpers.capture);
if (helpers.showResults()) {
  app.get('/', helpers.latestCapturePage);
  app.get('/latest', helpers.latestCapture);
}

app.listen(port, () => console.log(`listening at port ${port}...`));
