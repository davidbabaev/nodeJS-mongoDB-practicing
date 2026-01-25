const express = require('express');

const app = express();
const PORT = 8181;

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start server
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
  connectToDB();
});
