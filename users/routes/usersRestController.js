const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  getUsers, 
  getUser, 
  updateUser, 
  deleteUser 
} = require('../models/userAccessDataService');  // ✅ Fixed path and imports

// GET all users
router.get('/', async (req, res) => {
  try {
    let users = await getUsers();  // ✅ Now using correct function
    res.send(users);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// GET single user by ID
router.get('/:id', async (req, res) => {
  try {
    let user = await getUser(req.params.id);  // ✅ Using service function
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// POST - Register new user
router.post('/', async (req, res) => {  // ✅ Fixed path (just '/')
  try {
    let user = await registerUser(req.body);  // ✅ Using correct function
    res.send(user);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// PUT - Update user
router.put('/:id', async (req, res) => {
  try {
    let user = await updateUser(req.params.id, req.body);  // ✅ Using correct function
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

// DELETE - Delete user
router.delete('/:id', async (req, res) => {
  try {
    let user = await deleteUser(req.params.id);  // ✅ Using correct function
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  }
  catch(err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;