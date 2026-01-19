const mongoose = require("mongoose");
const {URL, EMAIL, DEFAULT_VALIDATOR, Number} = require('../../../helpers/mongodb/mongooseValidators')

const CardSchema = new mongoose.Schema({
  title: DEFAULT_VALIDATOR,
  subtitle: DEFAULT_VALIDATOR,
  description: DEFAULT_VALIDATOR,
  phone: Number,
  email: EMAIL,
  web: URL,
  image: {
    url: URL,
    alt: DEFAULT_VALIDATOR,
  },
  address: {
    state: DEFAULT_VALIDATOR,
    city: DEFAULT_VALIDATOR,
    street: DEFAULT_VALIDATOR,
    houseNumber: DEFAULT_VALIDATOR,
    zip: DEFAULT_VALIDATOR,
  },
  bizNumber: Number,
  likes: [String],
  user_id: '',
  createdAt: Date.now
})

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;


/* const mongoose = require("mongoose");
const {
  DEFAULT_VALIDATION,
  PHONE,
  EMAIL,
  URL,
} = require("../../../helpers/mongodb/mongooseValidators");
const Image = require("../../../helpers/mongodb/Image");
const Address = require("../../../helpers/mongodb/Address");

const cardSchema = new mongoose.Schema({
  title: DEFAULT_VALIDATION,
  subtitle: DEFAULT_VALIDATION,
  description: { ...DEFAULT_VALIDATION, maxLength: 1024 },
  phone: PHONE,
  email: EMAIL,
  web: URL,
  image: Image,
  address: Address,
  bizNumber: {
    type: Number,
    required: true,
    min: 1000000,
    max: 9999999,
  },
  likes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Card = mongoose.model("card", cardSchema);

module.exports = Card; */






























