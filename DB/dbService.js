// connect to database
// ask what inviorment we on, development or production, somtimes tests invio Srment.

const mongoose = require("mongoose");
const connstToAtlasDB = require("./mongodb/connectToAtlas");
const connectToLocalDB = require("./mongodb/connectToMongoDBLocally");

const ENVIRONMENT = "development";

const connectToDB = async () => {
  if (ENVIRONMENT === "development") {
    await connectToLocalDB();
  }
  if (ENVIRONMENT === "production") {
    await connstToAtlasDB();
  }
};

module.exports = connectToDB;
