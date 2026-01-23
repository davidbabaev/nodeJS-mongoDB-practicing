const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const Card = require('../mongoDBnodeJsFirst/cards/models/mongodb/Card')

const PORT = 8181;

app.get('/cards', (req, res) => {
  res.send('coonected to app')
});

const connectToDB = async () => {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/cardsServer')
    console.log('connected to DB');
  }
  catch(err){
    console.log(err.message);
  }
}

app.post('/cards', (req, res) => {
  res.send(Card)
})

app.listen(PORT, () => {
  console.log('listing to ', PORT);
  connectToDB(); // <- add this otherwise you're never connecting to mongoDB
})