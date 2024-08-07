// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(bodyParser.json());

const config=require('./config/config');
mongoose.connect(config.mongoURI).then(()=>{
  console.log("Mongo db connected")
}).catch((e)=>{
  console.log(e);
});
// Routes
const itemRoutes = require('./routes/items');
app.use('/api', itemRoutes);

app.listen(config.PORT, () => {
  console.log(`Server is running on port: ${config.PORT}`);
});

