const express = require('express');
const mongoose = require('mongoose');
const { createCard, getCards, updateCard, deleteCard } = require('./cards/models/cardsAccessDataService');

const app = express();
const PORT = 8181;

app.use(express.json());

const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/cardsServer');
    console.log('Connected to MongoDB');
  }
  catch(err) {
    console.log('MongoDB connection error:', err.message);
  }
};

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// GET all cards
app.get('/cards', async (req, res) => {
  try {
    let cards = await getCards();
    res.send(cards);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// POST new card
app.post('/cards', async (req, res) => {
  try {
    let card = await createCard(req.body);
    res.send(card);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// Start server
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
  connectToDB();
});









/* const express = require('express');
const mongoose = require('mongoose');
const {createCard, getCards, updateCard, deleteCard} = require('./cards/models/cardsAccessDataService')
const app = express();
app.use(express.json());

const Card = require('../mongoDBnodeJsFirst/cards/models/mongodb/Card')

const PORT = 8181;

app.get('/cards', (req, res) => {
  res.send('coonected to app')
});

const getCard = async (cardId) => {
  try {
    let card = await Card.findById(cardId);
    return card;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

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
}) */