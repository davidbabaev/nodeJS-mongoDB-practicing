/* const express = require("express");
const mongoose = require("mongoose");
const {createCard, getCards,} = require("./cards/models/cardsAccessDataService");

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
}); */









const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const Card = require('../mongoDBnodeJsFirst/cards/models/mongodb/Card')

// const {createCard, } = require('../mongoDBnodeJsFirst/cards/models/cardsAccessDataService')

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


// you app.post - isn't doing anything useful:
// ❌ What you wrote:
// app.post('/cards', (req, res) => {
//   res.send(Card)  // This just sends the schema definition, not a new card!
// })

// what i forgot:
// 1. try{}catch(){}
// 2. let card = new Card(req.body) <- create card from client data
// 3. card = await card.save() <- save to mongoDB
// 4. res.card(card) <- send back the saved card










/* const express = require('express');
const mongoose = require('mongoose');

const{createCards, getCards} = require('../mongoDBnodeJsFirst/cards/models/cardsAccessDataService')

const app = express();
app.use(express.json());

const PORT = 8181;

app.get('/cards', (req, res) => {
  res.send('App Is Working')
})

const connectToDB = async () => {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/cardsServer')
  }
  catch(err){
    console.log(err.message);
  }
}

app.post('/cards', async (req, res) => {
  // res.send(req.body) <- // Just sends back what client sent
  // this workd but doesn't save to databse.

  try{
    let card = await createCards(req.body) //save to database
    res.send(card) //dend saved card back
  }
  catch(error){
    res.status(400).send(error.message) // if error, send error
  }
})

app.listen(PORT, () => {
  console.log('App Listening.. to: ', PORT);
  connectToDB();
}) */