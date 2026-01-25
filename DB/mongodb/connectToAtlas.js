// connect to AtlasDB - cloud - path to atlas

const mongoose = require('mongoose');
const connectionStringForAtlas = "";

const connstToAtlasDB = async () => {
  try {
    await mongoose.connect(connectionStringForAtlas);
    console.log('Connected to mongoDB in Atlas');
  }
  catch(err) {
    console.log('Atlas connection error:', err.message);
  }
};

module.exports = connstToAtlasDB;