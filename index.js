const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

require('./config/db');

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


app.listen(PORT, () => console.log(`server is listening on...${PORT}`));