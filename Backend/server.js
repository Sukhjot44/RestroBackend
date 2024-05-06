const express = require('express');
const connectDB = require('./db/db'); 
const cors = require('cors');
const session = require('express-session');
const User = require('./models/User');
const Cart = require('./models/Cart'); 
const port = 3001;
const app = express();
app.use(express.json()); 
app.use(cors());
app.use(session({
  secret: 'sukhJ0t',
  resave: false,
  saveUninitialized: true,
  
}));

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, };

app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Signup endpoint
app.post('/signin', (req, res) => {
const user = new User({
 username: req.body.username,
 email: req.body.email,
 password: req.body.password
});
  user.save()
  .then(newUser => res.status(201).json(newUser))
  .catch(err => res.status(400).json({ message: err.message }));
  });
  

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'No such account, please sign in to create an account' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    req.session.isLoggedIn = true;
    req.session.user = { username: user.username, email: user.email } 
    res.status(200).json({ message: 'Authentication successful', user: req.session.user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.json({ message: 'Logout successful' });
    }
  });
});


app.post('/cart/add',  (req, res) => {
  try {
      const { itemName,price,username } = req.body;
      console.log(req.body);
      const cartItem = new Cart({ username,itemName, price });
      cartItem.save();
      res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});


app.delete('/cart/:itemName', async (req, res) => {
  const itemName = req.params.itemName;
  try {
      await Cart.deleteOne({ itemName });
      res.sendStatus(200);
  } catch (error) {
      console.error('Error removing item:', error);
      res.sendStatus(500);
  }
});
app.put('/cart/:itemName/decrement', async (req, res) => {
  const itemName = req.params.itemName;
  try {
      await Cart.findOneAndUpdate({ itemName }, { $inc: { quantity: -1 } });
      res.sendStatus(200);
  } catch (error) {
      console.error('Error decrementing quantity:', error);
      res.sendStatus(500);
  }
});

app.put('/cart/:itemName/increment', async (req, res) => {
  const itemName = req.params.itemName;

  try {
      await Cart.findOneAndUpdate({ itemName }, { $inc: { quantity: 1 } });
      res.sendStatus(200);
  } catch (error) {
      console.error('Error incrementing quantity:', error);
      res.sendStatus(500);
  }
});



app.get('/cart', async (req, res) => {
  try {
    const { username } = req.query;
    const cartItems = await Cart.find({ username });
    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
