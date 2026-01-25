const express = require('express');
const connectToDB = require('./DB/dbService');  // ✅ Added import
const router = require('./router/router');       // ✅ Added import

const app = express();
const PORT = 8181;

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// ✅ Connect all routes through the router
app.use(router);

// Start server
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
  connectToDB();  // ✅ Now this works because we imported it
});