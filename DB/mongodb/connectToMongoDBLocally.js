// connect to the database - mongoDB - like on the app
const mongoose = require('mongoose');

const connectToLocalDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/cardsServer');
    console.log('Connected to MongoDB locally');
  }
  catch(err) {
    console.log('MongoDB connection error:', err.message);
  }
};

module.exports = connectToLocalDB;