const express = require('express');
const mongoose = require('mongoose');
const { createCard, getCards, updateCard, deleteCard, likeCard } = require('./cards/models/cardsAccessDataService');
const Card = require('./cards/models/mongodb/Card');

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

// GET single card by ID
app.get('/cards/:id', async (req, res) => {
  try {
    let card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).send('Card not found');
    }
    res.send(card);
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

// PUT update card
app.put('/cards/:id', async (req, res) => {
  try {
    let card = await updateCard(req.params.id, req.body);
    if (!card) {
      return res.status(404).send('Card not found');
    }
    res.send(card);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// PATCH like/unlike card
app.patch('/cards/:id', async (req, res) => {
  try {
    let card = await likeCard(req.params.id, req.body.userId);
    res.send(card);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// DELETE card
app.delete('/cards/:id', async (req, res) => {
  try {
    let card = await deleteCard(req.params.id);
    if (!card) {
      return res.status(404).send('Card not found');
    }
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
