const mongoose = require("mongoose");
const { URL, EMAIL, DEFAULT_VALIDATOR, PHONE, NUMBER } = require('../../../helpers/mongodb/mongooseValidators');

const CardSchema = new mongoose.Schema({
  title: DEFAULT_VALIDATOR,
  subtitle: DEFAULT_VALIDATOR,
  description: DEFAULT_VALIDATOR,
  phone: PHONE,  // ✅ Changed to PHONE (String with regex)
  email: EMAIL,
  web: URL,
  image: {
    url: URL,
    alt: DEFAULT_VALIDATOR,
  },
  address: {
    state: { ...DEFAULT_VALIDATOR, required: false },  // State is optional
    country: DEFAULT_VALIDATOR,
    city: DEFAULT_VALIDATOR,
    street: DEFAULT_VALIDATOR,
    houseNumber: NUMBER,  // ✅ Now a Number
    zip: { ...NUMBER, required: false, default: 0 },  // ✅ Number, optional
  },
  bizNumber: {
    type: Number,
    required: true,
    min: 1000000,
    max: 9999999,
  },
  likes: [String],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;



/* const mongoose = require("mongoose");
const {URL, EMAIL, DEFAULT_VALIDATOR, NUMBER} = require('../../../helpers/mongodb/mongooseValidators')

const CardSchema = new mongoose.Schema({
  title: DEFAULT_VALIDATOR,
  subtitle: DEFAULT_VALIDATOR,
  description: DEFAULT_VALIDATOR,
  phone: NUMBER,
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
  bizNumber: NUMBER,
  likes: [String],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }, // --> needs a proper type definition
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Card = mongoose.model('Card', CardSchema);
module.exports = Card; */






























