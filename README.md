What did i learned yesterday, new logics:
get()
set()
I learned working with nodeJS
I learned to create file with object for validations for example email, phone number, and domain address, for each we create an object, inside the object we initial all the checks and types we need, regex, type string or number, and so on, the in the schema of card, when we put title we can use default_validation also we initial in the validations file, when we user email: Email, that we imported from the validation file.
We learned about postman and downloaded it, but not understand it, and what is that for, I just know to put my host link and check if there are errors. I don’t really understand what it is. Just understand theoretically that it is like a server where we send requests and get responses.
I learned about express tools - get, set, but i still don’t understand express syntax and the combining of mongoose codes with the express codes. (crud), I need strong practice for all of that today.
I learned that we have in javaScript built-in regex operations.
I learned about regexes that I didn't know about before, now I can understand at least what that means.
I learned a little bit about the structure of the folders, and the files in nodejs. But also i don’t know architecture and organizations of files and logics, I don't know the psychology of that yet. I just know copy and paste and theoretically understand that it is necessary to separate too many files because it's hard to read all the code from one file.
I don’t know yet how to create a server with nodejs, I still need to copy and paste, I still don't know the syntax and the logic from my memory.
I do remember some mongoose logics: find(), findById(id), findByIdAndUpdate(id, {}), findByIdAndDelete(id), delteMany(id, {name: ‘Dave’}), save(), model(), mongoose.Schema({}).


Goals for today:
keep working and practicing all that i'm struggling with in the list above.
Get deeper in node js -> express + mongoose practicing from 0.
At the end of the day some recall for the react project (20 min)

What is nodeJS?
node.js is a runtime environment that lets you run javaScript outside the browser.

Before nodeJS:
JavaScript could ONLY run inside browsers (Chrome, Firefox, etc.)
- Browser has a JavaScript engine (Chrome uses "V8")
- You could only use JS for website interactions (clicking buttons, animations)

After nodeJS:
Ryan Dahl took Chrome's V8 engine and made it work independently
- Now JavaScript can run on your computer directly
- You can build servers, tools, applications
- Same language for frontend AND backend


How nodeJS works - visual:
┌──────────────────────────────────────────────────────────┐
│                      YOUR COMPUTER                       │
│                                                          │
│   ┌─────────────┐    ┌─────────────┐    ┌────────────┐   │
│   │   app.js    │────│   Node.js   │────│  Output/   │   │
│   │ (your code) │    │  (V8 engine)│    │  Actions   │   │
│   └─────────────┘    └─────────────┘    └────────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘


You write JS code → Node.js reads and executes it → Things happen

Run a file:
node app.js
This tells nodeJS: read app.js execute the javascript inside.

Node.js ket concept: Modules
In nodeJS, doe organized into **modules** (separate files that do specific things)
Without modules:
One giant file with 10,000 lines
Impossible to read
Impossible to maintain
With modules:
Small files, each does one thing
Easy to understand
Easy to reuse

const express = require('express');   // Web framework
const mongoose = require('mongoose'); // MongoDB helper


What is npm:
Npm = node package manager
Think of it as an app store for code:
Millions of free packages/ modules
Anyone can publish code
Anyone can download and use it
npm init              # Create package.json (project config)
npm install express   # Download 'express' into node_modules/
npm install           # Download ALL packages listed in package.json


What is package.json:
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^5.2.1",    // My project needs express
    "mongoose": "^9.1.4"    // My project needs mongoose
  }
}
```
It's a **shopping list** of what your project needs.

---

## What is node_modules/?

When you run `npm install`, packages download into the `node_modules/` folder.
```
my-project/
├── app.js
├── package.json
└── node_modules/        ← Downloaded packages live here
    ├── express/
    │   └── (express code)
    ├── mongoose/
    │   └── (mongoose code)
    └── (hundreds of other folders - dependencies of dependencies)





HTTP & SERVERS:
What is a server?
Simple definition: a server is a computer (or program) that waits for requests and sends back responses.

The meaning of server(physical machine):
A computer that’s always running, connected to the internet.
Waiting to respond to requests,
Companies like Google have massive data centers full of these.

Software server (program):
A program running on a computer that listens for incoming requests.
This is what you’re building with Express.

The simple truth: a server is just a program that:
Listens - waits patiently for someone to ask for something.
Processes - figures out what they want
responds  - sends back an answer
That’s it. When you Express code with node app.js , your computer becomes a server.

What is a port?
You computer has thousands of doors called ports, each service uses different door:
┌──────────────────────────────────────────┐
│            YOUR COMPUTER                 │
│                                          │
│   Port 80    → Regular websites (HTTP)   │
│   Port 443   → Secure websites (HTTPS)   │
│   Port 3000  → Your Express server       │
│   Port 8181  → Your current app.js       │
│   Port 27017 → MongoDB                   │
│                                          │
└──────────────────────────────────────────┘


Why port?
Your computer can run multiple servers at once.
Each needs its own door to traffic doesn’t mix up

Url with port:
http://localhost:8181/cards
         │       │     │
         │       │     └── Path (which resource)
         │       └── Port (which door)
         └── Host (which computer, localhost = your computer)



What is HTTP?
HTTP = hyperText transfer protocol
It's a language for how computers talk to each other over the internet.
The conversation pattern:
┌──────────┐                      ┌──────────┐
│  CLIENT  │    HTTP REQUEST      │  SERVER  │
│ (Browser)│ ──────────────────>  │ (app.js) │
│          │                      │          │
│          │    HTTP RESPONSE     │          │
│          │ <──────────────────  │          │
└──────────┘                      └──────────┘

1. Client sends a REQUEST (asking for something)
2. Server sends a RESPONSE (giving something back)

Every HTTP interaction follows this pattern. Always.

HTTP request - what does it contain?
When client sends a request, it contains:
┌─────────────────────────────────────────────────────────┐
│                    HTTP REQUEST                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. METHOD    →  What action? (GET, POST, PUT, DELETE)  │
│                                                         │
│  2. URL/PATH  →  What resource? (/cards, /users/123)    │
│                                                         │
│  3. HEADERS   →  Metadata (content-type, auth token)    │
│                                                         │
│  4. BODY      →  Data being sent (for POST/PUT)         │
│                                                         │
└─────────────────────────────────────────────────────────┘

Create  → POST
Read    → GET
Update  → PUT
Delete  → DELETE

You already know about mongoose curd. HTTP methods are the same concept, but for the web






HTTP Response - What Does It Contain?
┌─────────────────────────────────────────────────────────┐
│                    HTTP RESPONSE                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. STATUS CODE  →  Was it successful? (200, 404, 500)  │
│                                                         │
│  2. HEADERS      →  Metadata about the response         │
│                                                         │
│  3. BODY         →  The actual data (JSON, HTML, etc)   │
│                                                         │
└─────────────────────────────────────────────────────────┘


The full picture:
┌─────────────┐         HTTP REQUEST              ┌─────────────┐
│             │  ─────────────────────────────>   │             │
│   BROWSER   │  GET /cards                       │   EXPRESS   │
│  (Client)   │  Host: localhost:8181             │   SERVER    │
│             │                                   │             │
│             │         HTTP RESPONSE             │             │
│             │ <──────────────────────────────   │             │
│             │  200 OK                           │             │
│             │  [{"title":"card1"}, ...]         │             │
└─────────────┘                                   └─────────────┘



What really happens when you visit a URL:
You type: http://localhost:8181/cards
1. Browser creates HTTP REQUEST:
   - Method: GET
   - Path: /cards
   - Host: localhost:8181

2. Request travels to your Express server (port 8181)

3. Express receives request, finds matching route

4. Your code runs (maybe queries MongoDB)

5. Express creates HTTP RESPONSE:
   - Status: 200 OK
   - Body: [{"title": "Card 1"}, {"title": "Card 2"}]

6. Response travels back to browser

7. Browser displays the data


Why can't the browser test everything?
Browser address bar can only send get requests!
Browser address bar:
✅ GET /cards          → Works (just visit URL)
✅ GET /cards/123      → Works (just visit URL)
❌ POST /cards         → Cannot do!
❌ PUT /cards/123      → Cannot do!
❌ DELETE /cards/123   → Cannot do!


This is why you need a postman!
Postman lets you send any type of request (GET, POST, PUT, DELETE) with any data.

========================================================================
so what do you mean abut, browser cna't test everything? why is he need test something, and what is a test?

if i use a express and mongoose and for example want to post data, for example, and i log it,
i do it in the js file the POST, why i need postman for this? and what do you mean when you say browser cannot do this, why is he need to post, it happen in the code

You might be thinking:
"I write app.post('/cards', ...) in my code, so when I run node app.js, it will POST data... right?"
Not that’s not how it works!

What is Express?
Simple definition: Express is a web framework for node.js that makes it easy to create servers and handle HTTP requests.
const express = require('express');
const app = express();

app.get('/cards', (req, res) => res.send(cards));
app.post('/cards', (req, res) => /* create card */);
app.get('/cards/:id', (req, res) => /* get one card */);

app.listen(8181);

Express gives you: 
clean , readable routing
Easy request/ response handling
Built-in helpers (JSON parsing, etc.)
Middleware system (well learn this)
The express app object:
When you call express(), you get an app object, this is you entire server.
const express = require('express');  // Import the express library
const app = express();               // Create your application
```

**What can the app object do?**
```
app
 ├── .get()      → Define GET route
 ├── .post()     → Define POST route
 ├── .put()      → Define PUT route
 ├── .delete()   → Define DELETE route
 ├── .use()      → Add middleware (we'll learn this)
 └── .listen()   → Start the server



Express routing - the core concept
Routing = defining what happens when someone visits a specific URL with a specific method.

Pattern:
app.METHOD(PATH, HANDLER);

Method - get, post, put, delete
Path - url path(‘/cards’, ‘/users)
Handler = function that runs when route is triggered

========================================================================

const express = require('express');
Loads the express library from node_modules
Stores it in variable express

What is ‘express’ now?
It’s a function that creates applications
You can call it: express()




    
 


Create application:
const app = express();
```

**What it does:**
- Calls the `express()` function
- Creates an **application object**
- Stores it in variable `app`

**What is an `app` now?**
```
app is an OBJECT with methods:
├── app.get()      → Define GET route
├── app.post()     → Define POST route
├── app.put()      → Define PUT route
├── app.delete()   → Define DELETE route
├── app.use()      → Add middleware
└── app.listen()   → Start server
```

**Analogy:**
```
express = Restaurant Blueprint (instructions how to build)
app = Your Actual Restaurant (built from blueprint)


Start the server:
app.listen(PORT, () => {
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
└─────────────────────────────────────────────────────────────┘












❓ QUICK QUIZ
Before moving on, answer these:

What is an app?
App is an express function. Our entire server app.

What does app.get('/', ...) do - does it RUN the function immediately?
It gets the path that the client gets in. It does not run immediately; it runs when the client gets in this path.

What is req and what is res?
Rez is request, and re is for response

What does app.listen() do?
app.listen() is listening to the server, it is listening to the port. This is the function that run our server

When does console.log('Server running...') execute?
When clients get in the path


Corrections:
App is an object, not a function. Is created by calling a function express(). But you're right that it’s our entire server app.
Correct! app.get(‘/’, handler), registers the route (saves it for later), does not run the handler yet. Later when client visits ‘/’ -> then handler runs
Req = request - information coming in (from client). Res = response - tool for sending back (to client)
Correction: it doesn’t listen to the server - it starts the server and makes it listen ON a port. Listen -> start the server, (8181) listen ON port 8181. App.listen starts the server and makes it listen for incoming requests on the specified port.
Incorrect: the console.log is inside app.listen()’s callback, not inside a route. It executes once, right after the server starts - before any client visits.
Timeline:
─────────────────────────────────────────────────────────────▶

1. node app.js              2. Server starts           3. Clients visit
   │                           │                          │
   │                           │                          │
   ▼                           ▼                          ▼
   Code runs top              console.log runs          Route handlers run
   to bottom                  (ONCE, automatically)     (each time client visits)



const express = require('express');     // 1️⃣ Runs
const app = express();                  // 2️⃣ Runs
const PORT = 8181;                      // 3️⃣ Runs

app.get('/', (req, res) => {            // 4️⃣ REGISTERS route (handler waits)
  res.send('Server is working');        // 🕐 Waits... runs later when client visits
});

app.listen(PORT, () => {                // 5️⃣ STARTS server
  console.log('Server running...');     // 6️⃣ Runs (after server starts)
});
                                        // 🕐 Server waits for requests...
                                        // 7️⃣ Client visits "/" → handler runs


app.get('/', (req, res) => {        // ← This LINE runs immediately (registers)
  res.send('Server is working');    // ← This CODE waits (runs when client visits)
});
```
```
┌─────────────────────────────────────────────────────────────┐
│  app.get('/', handler)                                      │
│       │           │                                         │
│       │           └── The HANDLER function                  │
│       │               Does NOT run yet                      │
│       │               Saved for later                       │
│       │                                                     │
│       └── The LINE itself                                   │
│           Runs immediately                                  │
│           Tells Express: "save this route"                  │
└─────────────────────────────────────────────────────────────┘
```
# 📋 Full Timeline
```
When you run: node app.js

TIME ──────────────────────────────────────────────────────────▶

│ STEP 1: Code runs top to bottom
│
├─▶ const express = require('express')  ✓ Done
├─▶ const app = express()               ✓ Done
├─▶ const PORT = 8181                   ✓ Done
├─▶ app.get('/', ...)                   ✓ Route REGISTERED (handler saved)
├─▶ app.listen(PORT, callback)          ✓ Server STARTS
├─▶ console.log('Server running...')    ✓ Callback runs
│
│ STEP 2: Server is now WAITING
│
│   ... waiting ...
│   ... waiting ...
│
│ STEP 3: Client visits http://localhost:8181/
│
└─▶ Handler runs: res.send('Server is working')
```






Precise - מדויק
Middleware - תוכנת ביניים





Adding mongoDB tools to our code:
app.use(express.json());

Middleware = function that runs between request arriving and route handler running.
Request       Middleware        Route Handler      Response
arrives   →   runs first   →   runs second    →   sent back


app.use(express.json());
│    │       │
│    │       └── express.json() is a BUILT-IN middleware function
│    │           It parses JSON bodies
│    │
│    └── use() means "apply this middleware to ALL routes"
│
└── Your app


What does app.use() do?
app.use(something);
```

> "Run `something` for **EVERY** incoming request, BEFORE route handlers"
```
ANY request (GET, POST, PUT, DELETE)
         │
         ▼
    app.use() runs first (middleware)
         │
         ▼
    Then matching route runs



Question: what happens if you forgot app.user()


route: 
Simple meaning - a path/url that your server responds to.
app.get('/', ...)           // Route: "/"
app.get('/cards', ...)      // Route: "/cards"
app.get('/users', ...)      // Route: "/users"
app.post('/cards', ...)     // Route: "/cards"
```

**Analogy - Restaurant Menu:**
```
┌─────────────────────────────────────────┐
│            RESTAURANT MENU              │
│                                         │
│   /           →  Home page              │
│   /cards      →  Cards section          │
│   /users      →  Users section          │
│   /cards/123  →  Specific card          │
│                                         │
└─────────────────────────────────────────┘

Each "route" is like an item on the menu.
Client asks for a route → Server responds.
```

**URL Example:**
```
http://localhost:8181/cards
                      │
                      └── This is the ROUTE
```




Body:
Simple meaning, the data sent inside a request.
**Analogy - Letter:**
```
┌─────────────────────────────────────────┐
│              ENVELOPE                   │
│                                         │
│   To: localhost:8181/cards  (route)     │
│   Method: POST                          │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │           BODY                  │   │
│   │                                 │   │
│   │   {                             │   │
│   │     "title": "My Card",         │   │
│   │     "phone": "050-1234567"      │   │
│   │   }                             │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘

Route = Address on envelope (WHERE to send)
Body = Letter inside (WHAT you're sending)


Important:
Get requests usually have no body (just asking for data)
post/ put requests have body (sending data to server)

















post()
Simple meaning: HTTP method for sending/ creating data.
The 4 main methods:
**Simple meaning:** HTTP method for **sending/creating** data.

**The 4 Main Methods:**
```
┌──────────┬─────────────────────────────────────────┐
│  Method  │  Purpose                                │
├──────────┼─────────────────────────────────────────┤
│  GET     │  READ - Get data (no body)              │
│  POST    │  CREATE - Send new data (has body)      │
│  PUT     │  UPDATE - Change existing data (body)   │
│  DELETE  │  DELETE - Remove data (no body)         │
└──────────┴─────────────────────────────────────────┘
```

**Real life examples:**
```
GET    →  "Show me all the cards"
POST   →  "Here's a NEW card, please save it"
PUT    →  "Change card #123 to this new data"
DELETE →  "Remove card #123"


use():
Simple meaning: apply something to all requests before routes run.
app.use(express.json());
```

**Analogy - Security Gate:**
```
                    ┌─────────────────┐
                    │   SECURITY GATE │
All visitors  ────> │   (app.use)     │ ────> Then go to destination
must pass           │   Checks bags   │             (routes)
through here        └─────────────────┘










app.use() -> runs for all requests.
// app.use() - Runs for ALL requests
app.use(express.json());    // Every request goes through this

// app.get() - Runs only for GET requests to specific path
app.get('/cards', ...)      // Only GET /cards goes through this
```

**Visual:**
```
Request: POST /cards
         │
         ▼
    app.use(express.json())   ← ALWAYS runs first
         │
         ▼
    app.post('/cards', ...)   ← Then matching route runs


Request: GET /users
         │
         ▼
    app.use(express.json())   ← ALWAYS runs first
         │
         ▼
    app.get('/users', ...)    ← Then matching route runs




















🔑 express and app are TWO DIFFERENT THINGS

const express = require('express');  // express = the LIBRARY
const app = express();               // app = an APPLICATION created by the library

They are **not the same**:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   express (the library)         app (your application)      │
│   ─────────────────────         ──────────────────────      │
│                                                             │
│   Has these methods:            Has these methods:          │
│   ├── express.json()            ├── app.get()               │
│   ├── express.static()          ├── app.post()              │
│   ├── express.Router()          ├── app.use()               │
│   └── (and more...)             ├── app.listen()            │
│                                 └── (and more...)           │
│                                                             │
└─────────────────────────────────────────────────────────────┘


app.use(express.json());
│   │      │      │
│   │      │      └── json() is a METHOD of express
│   │      │          Returns a middleware function
│   │      │
│   │      └── express = the library we imported
│   │
│   └── use() is a METHOD of app
│       Accepts a middleware function
│
└── app = our application

It’s like:

// This:
app.use(express.json());

// Is the same as:
const jsonMiddleware = express.json();  // Get the function
app.use(jsonMiddleware);                // Pass it to use()




Analogy:

const toyota = require('toyota');    // toyota = the FACTORY/COMPANY
const myCar = toyota();              // myCar = a CAR made by Toyota
```
```
toyota (the company)              myCar (your car)
────────────────────              ─────────────────

toyota.getEngine()                myCar.start()
toyota.getWheels()                myCar.stop()
toyota.getParts()                 myCar.drive()
                                  myCar.installPart()

___________________________________________________________________________________

// Install an engine from Toyota into your car:
myCar.installPart(toyota.getEngine());
│      │            │       │
│      │            │       └── Method of toyota (gets an engine)
│      │            └── The company/factory
│      └── Method of myCar (installs something)
└── Your car


Why my suggestion don’t work - use(app.json());  // ❌ WRONG
Problems:
use() is not a standalone function - it’s a method of app
‘app.json()’ doesn’t exist - ‘json()’ is a method of ‘express’, not ‘app’
use(...) - user is not a function by itself
app.json() - app doesn’t have json method
















app.use(express.json());      // Defining middleware
app.get('/cards', ...);       // Defining route
app.post('/cards', ...);      // Defining route
app.listen(8181, ...);        // Starting server
```

**Nothing runs yet!** You're just telling Express:

> "Hey Express, save these for later. When requests come, use them."

---

## Moment 2: REQUEST ARRIVES (Runtime)

When a **client sends a request**, THEN things run:
```
Client sends: POST /cards

         │
         ▼
    app.use(express.json())   ← NOW this runs
         │
         ▼
    app.post('/cards', ...)   ← THEN this runs
```

---

# 🚗 Analogy: Restaurant Setup vs. Serving Customers

**Morning (Defining):**
```
┌──────────────────────────────────────────────────────────────┐
│                    RESTAURANT SETUP                          │
│                                                              │
│   Manager says:                                              │
│                                                              │
│   "Security guard, stand at the door"     ← app.use()        │
│   "Chef, you handle burger orders"        ← app.get()        │
│   "Chef, you handle pizza orders"         ← app.post()       │
│   "Open the restaurant!"                  ← app.listen()     │
│                                                              │
│   Everyone is IN POSITION, but doing nothing yet.            │
│   Waiting for customers...                                   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Customer arrives (Request):**
```
┌──────────────────────────────────────────────────────────────┐
│                    CUSTOMER ARRIVES                          │
│                                                              │
│   1. Security guard checks them     ← app.use() RUNS         │
│   2. Customer orders pizza          ← app.post() RUNS        │
│   3. Chef makes pizza                                        │
│   4. Customer gets pizza                                     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

# 📋 Timeline
```
TIME ──────────────────────────────────────────────────────────────▶

│
│  You run: node app.js
│
├── app.use(express.json())    → REGISTERED (saved for later)
├── app.get('/cards', ...)     → REGISTERED (saved for later)
├── app.post('/cards', ...)    → REGISTERED (saved for later)
├── app.listen(8181)           → SERVER STARTS
│
│   ... server waiting ...
│   ... server waiting ...
│
│  Client sends: POST /cards
│
├── express.json() middleware  → RUNS NOW ✅
├── app.post('/cards') handler → RUNS NOW ✅
│
│   ... server waiting again ...
│
│  Client sends: GET /cards
│
├── express.json() middleware  → RUNS AGAIN ✅
├── app.get('/cards') handler  → RUNS NOW ✅
│
```

---

# 🎯 Direct Answer

> "When we do app.get or app.post or app.listen, does use() run?"

**NO.** `use()` does NOT run when you define routes.

| Action | What happens |
|--------|--------------|
| `app.use(...)` | REGISTERS middleware (saves for later) |
| `app.get(...)` | REGISTERS route (saves for later) |
| `app.post(...)` | REGISTERS route (saves for later) |
| `app.listen(...)` | STARTS server (now waiting for requests) |
| **Request arrives** | NOW middleware runs, THEN route runs |

---

# ✅ When Does Middleware Run?
```
app.use(express.json())  runs when:
─────────────────────────────────────

✅ Client sends GET /            → middleware runs
✅ Client sends GET /cards       → middleware runs
✅ Client sends POST /cards      → middleware runs
✅ Client sends DELETE /users    → middleware runs

Every single request → middleware runs first



express.json     →  A function that CREATES middleware
express.json()   →  The actual middleware (returned by calling the function)

When a client sends data to your server, it arrives as raw text (a string), not a javaScript object.
Real example (postman or react) sends:
POST /cards
Content-Type: application/json

{"title":"My Card","phone":"050-1234567"}



'{"title":"My Card","phone":"050-1234567"}'
│                                         │
└── This is a STRING, not an object! ─────┘

Without express.json()
const express = require('express');
const app = express();

// NO middleware!

app.post('/cards', (req, res) => {
  console.log(req.body);        // undefined
  console.log(typeof req.body); // "undefined"
  
  // You CANNOT do this:
  const title = req.body.title; // ERROR! Cannot read property of undefined
});

app.listen(8181);


With middleware function:
const express = require('express');
const app = express();

app.use(express.json());  // ← Add middleware

app.post('/cards', (req, res) => {
  console.log(req.body);        // { title: "My Card", phone: "050-1234567" } ✅
  console.log(typeof req.body); // "object"
  
  // NOW you can do this:
  const title = req.body.title; // "My Card" ✅
  const phone = req.body.phone; // "050-1234567" ✅
});

app.listen(8181);
```

**Now it works!**

---

# 🔧 What `express.json()` REALLY Does

The middleware function does this job:
```
BEFORE middleware:

    req.body = undefined
    
    Raw data exists somewhere: '{"title":"My Card","phone":"050-1234567"}'
    But you can't access it easily.


AFTER middleware runs:

    req.body = { title: "My Card", phone: "050-1234567" }
    
    Now it's a real JavaScript object!
    You can use req.body.title, req.body.phone, etc.



What did i learned today:
app.use() - use() is a method of the app, the entire application.
(express. json()) json() is a method of express library.
We use that middleware function that runs when the client makes a request like post, like put, so we need that because we get a javascript object, we get it as a string. And we need it as a javascript code.
Middleware function is a function that runs on post or puet after client request, it’s first run then the get run. It’s like a kind of validation of the coming object.
get/ post/ put - run only when the user sends a request from the client side. The listen() logic waiting for the request from the user. For running the appropriate function to give him back a response.
