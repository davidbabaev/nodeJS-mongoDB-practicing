const Card = require("./mongodb/Card");

// CREATE
const createCard = async (newCard) => {
  try {
    let card = new Card(newCard);
    card = await card.save();
    return card;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

// READ - Get all cards
const getCards = async () => {
  try {
    let cards = await Card.find();
    return cards;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

// ✅ NEW: READ - Get single card by ID
const getCard = async (cardId) => {
  try {
    let card = await Card.findById(cardId);
    return card;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

// UPDATE
const updateCard = async (cardId, newCard) => {
  try {
    const card = await Card.findByIdAndUpdate(cardId, newCard, { new: true });
    return card;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

// DELETE
const deleteCard = async (cardId) => {
  try {
    const card = await Card.findByIdAndDelete(cardId);
    return card;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

// LIKE/UNLIKE toggle
const likeCard = async (cardId, userId) => {
  try {
    let card = await Card.findById(cardId);
    if (!card) {
      throw new Error("A card with this ID cannot be found in the database");
    }
    
    if (card.likes.includes(userId)) {
      let newLikesArray = card.likes.filter((id) => id != userId);
      card.likes = newLikesArray;
    } else {
      card.likes.push(userId);
    }
    
    await card.save();
    return card;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

module.exports = { createCard, getCards, getCard, updateCard, deleteCard, likeCard };