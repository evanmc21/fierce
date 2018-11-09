const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://evtown:beyonce21@ds157383.mlab.com:57383/fierce-poll')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));
