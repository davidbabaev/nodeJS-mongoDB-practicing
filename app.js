const express = require("express");
const mongoose = require("mongoose");
const {
  createCard,
  getCards,
} = require("./cards/models/cardsAccessDataService");
const app = express();
const PORT = 8181;

app.use(express.json());

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/cardsServer");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
};

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/cards", async (req, res) => {
  try {
    let card = await createCard(req.body);
    res.send(card);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/cards", async (req, res) => {
  try {
    let cards = await getCards();
    res.send(cards);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log("app is listening to port " + PORT);
  connectToDb();
});