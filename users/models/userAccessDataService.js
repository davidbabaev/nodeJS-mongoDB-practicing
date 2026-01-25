const User = require("./mongodb/User");

// CREATE - Register new user
const registerUser = async (newUser) => {
  try {
    let user = new User(newUser);
    user = await user.save();
    return user;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

// READ - Get all users
const getUsers = async () => {
  try {
    let users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

// READ - Get single user by ID
const getUser = async (userId) => {
  try {
    let user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

// UPDATE - Update user by ID
const updateUser = async (userId, newUserData) => {
  try {
    let user = await User.findByIdAndUpdate(userId, newUserData, { new: true });
    return user;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

// DELETE - Delete user by ID
const deleteUser = async (userId) => {
  try {
    let user = await User.findByIdAndDelete(userId);
    return user;
  } catch (error) {
    throw new Error("Mongoose " + error.message);
  }
};

module.exports = { registerUser, getUsers, getUser, updateUser, deleteUser };