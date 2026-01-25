const express = require('express');
const router = express.Router(); // controller built-in functino, responsible on paths that start with specific string for example: '/cards'
const{registerUser, getUser} = require('../../users/models/userAccessDataService')
 
// 
// >>>>need to update all the functions<<<<<
// 

// GET all cards
router.get('/', async (req, res) => {
  try {
    let cards = await getCards();
    res.send(cards);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// GET single card by ID
router.get('/:id', async (req, res) => {
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
router.post('/cards', async (req, res) => {
  try {
    let card = await createCard(req.body);
    res.send(card);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// PUT update card
router.put('/:id', async (req, res) => {
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
router.patch('/:id', async (req, res) => {
  try {
    let card = await likeCard(req.params.id, req.body.userId);
    res.send(card);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// DELETE card
router.delete('/:id', async (req, res) => {
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

module.exports = router;