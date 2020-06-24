const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');
const authRoute = require('./routes/auth');

//Route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.get('/', (req, res) => {
  res.send("home page");
});

// mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to DB!")).
//   catch(error => handleError(error));

// const client = new MongoClient(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to DB!"));
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to DB!"));

app.listen(process.env.PORT, () => console.log(`Server up and running on ${process.env.PORT}`));