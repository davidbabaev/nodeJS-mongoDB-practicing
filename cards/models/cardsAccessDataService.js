const Card = require("./mongodb/Card");

const createCard = async (newCard) => {
  try {
    let card = new Card(newCard);
    card = await card.save();
    return card;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

const getCards = async () => {
  try {
    let cards = await Card.find();
    return cards;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

module.exports = { createCard, getCards };