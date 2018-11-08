const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const poll = require('./routes/poll');

// establish public folder
app.use(express.static(path.join(__dirname, 'public')));

// parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// enable cors
app.use(cors());

app.use('/poll', poll);

const port = 3000;

app.listen(port, () => console.log(`server is listening on...${port}`));