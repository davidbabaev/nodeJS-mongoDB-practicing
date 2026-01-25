const mongoose = require("mongoose");
const { URL, EMAIL, DEFAULT_VALIDATOR, PHONE, NUMBER } = require('../../../helpers/mongodb/mongooseValidators');
const Name = require('../../../helpers/mongodb/Name');  // ✅ Removed curly braces

const UserSchema = new mongoose.Schema({
    name: Name,  
    phone: PHONE,
    email: EMAIL,
    password: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        url: URL,
        alt: DEFAULT_VALIDATOR,
    },
    address: {
        state: { ...DEFAULT_VALIDATOR, required: false },
        country: DEFAULT_VALIDATOR,
        city: DEFAULT_VALIDATOR,
        street: DEFAULT_VALIDATOR,
        houseNumber: NUMBER,
        zip: { ...NUMBER, required: false, default: 0 },
    },
    isAdmin: { type: Boolean, default: false },
    isBusiness: { type: Boolean, default: false },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;