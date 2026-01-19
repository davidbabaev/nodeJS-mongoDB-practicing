/* const express = require('express'); // for creating server
const app = express() // create app
const mongoose = require('mongoose'); //for mongoDB conncetion
const PORT = 8181; // store port number

// middleware - that parses JSON in request body
app.use(express.json());

// database connection function 
const connectToDB = async () => {
  try{
    // should remove 'new', we not crating here new object. er just call function.
    await mongoose.connect('mongodb://127.0.0.1:27017/cardsServer');
    console.log('Connected to mongoDB');
  }
  catch(err){
    console.log('Could not connect to mongoDb',err.message);
  }
}

app.get('/', (req, res) => { // regiser route (saves it for later)
  //(does not run the function yet!)
  res.send('Server is working')
});

app.post('/cards', (req, res) => {
  console.log(req.body);
  //body meaning -> { title: "My Card", phone: "050-1234567" }
})

app.listen(PORT, () => { // start server
  console.log('Server running on port ' + PORT);
  connectToDB(); //connect to DB after server starts.
});
 */


/* const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
const PORT = 8181;

// GET - read data: to handle GET requests to home page '/'
app.get('/', (req, res) => {
  // respond with "hello world" when a GET request is made to the homepage '/'
  res.send('Hello World')
})

app.post('/cards', (req, res) => {
  console.log(req.body); // see what client sent
  res.send(req.body); // send it back
});

// start srver
app.listen(PORT, (req, res) => {
  console.log('sever running on port ' + PORT);
})
 */




/* app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
```

### What does `app.listen()` do?
```
app.listen(PORT, callback)
     │       │       │
     │       │       └── Function that runs AFTER server starts
     │       └── Which port to listen on (8181)
     └── Start listening for incoming requests
```

### Step by step:
```
1. app.listen(8181, ...) is called
2. Node.js opens port 8181 on your computer
3. Server starts WAITING for requests
4. THEN the callback runs: console.log('Server running...')
5. Server keeps running, waiting...
```

### Why callback?
```
Starting server takes time (even if milliseconds).
The callback ensures we log AFTER server is ready.

Without callback:
  app.listen(8181);
  console.log('Server running'); // Might run BEFORE server is ready!

With callback:
  app.listen(8181, () => {
    console.log('Server running'); // Guaranteed to run AFTER ready
  });
```

---

# 🔄 FULL EXECUTION FLOW

When you run `node app.js`:
```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: Node.js reads app.js top to bottom                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  const express = require('express')  → Load library         │
│  const app = express()               → Create app           │
│  const mongoose = require('mongoose') → Load library        │
│  const PORT = 8181                   → Store number         │
│                                                             │
│  app.get('/', ...)                   → REGISTER route       │
│  (Does NOT run the function yet!)    (Saves it for later)   │
│                                                             │
│  app.listen(8181, ...)               → START SERVER         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 2: Server is now RUNNING and WAITING                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Console shows: "Server running on port 8181"               │
│                                                             │
│  Server waits... waits... waits...                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 3: Someone visits http://localhost:8181/              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Express receives: GET /                                    │
│  Express looks for matching route: app.get('/', ...)        │
│  Express finds it!                                          │
│  Express runs: (req, res) => { res.send('Server is...') }   │
│  Response sent back to browser                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘ */






































const express = require("express");
const mongoose = require("mongoose");
const {createCard, getCards,} = require("./cards/models/cardsAccessDataService");

const app = express();
const PORT = 8181;

app.use(express.json());

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/cardsServer");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
};

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/cards", async (req, res) => {
  try {
    let card = await createCard(req.body);
    res.send(card);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/cards", async (req, res) => {
  try {
    let cards = await getCards();
    res.send(cards);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log("app is listening to port " + PORT);
  connectToDb();
});