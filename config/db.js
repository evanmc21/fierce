const mongoose = require('mongoose');
const CONNECTION_URI =
  process.env.MONGODB_URI ||
  "mongodb://evtown:beyonce21@ds157383.mlab.com:57383/fierce-poll";
mongoose.Promise = global.Promise;
mongoose.connect(CONNECTION_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));
