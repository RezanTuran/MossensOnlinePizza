const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcryptjs');
const saltRounds = 10;

const path = require('path');
let port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'], // Change to https://mossenspizzeria.herokuapp.com/#/
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: 'userId',
    secret: 'subscribe',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(express.static(path.join(__dirname, 'build')));

// DB Connection
const db = mysql.createPool({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b2c51d49d060ca',
  password: '6f567673',
  database: 'heroku_4a9f54220fd7a1d',
});
// Get Pizza
app.get('/api/get', (req, res) => {
  const sqlSelect = 'SELECT * FROM pizza';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// Post Pizza
app.post('/api/insert', (req, res) => {
  const pizzaName = req.body.pizzaName;
  const pizzaPrice = req.body.pizzaPrice;
  const pizzaPriceF = req.body.pizzaPriceF;
  const ingredients = req.body.ingredients;

  const sqlInsert =
    'INSERT INTO pizza (pizzaName, pizzaPrice, pizzaPriceF, ingredients) VALUES (?,?,?,?)';
  db.query(
    sqlInsert,
    [pizzaName, pizzaPrice, pizzaPriceF, ingredients],
    (err, result) => {
      //console.log(result);
    }
  );
});
// Delete Pizza
app.delete('/api/delete/:pizzaId', (req, res) => {
  const name = req.params.pizzaId;
  const sqlDelete = 'DELETE FROM pizza WHERE pizzaId = ?';
  db.query(sqlDelete, name, (err, result) => {
    if (err) console.log(err);
  });
});
// Update PizzaPrice
app.put('/api/updatePrice', (req, res) => {
  const pizzaId = req.body.pizzaId;
  const price = req.body.pizzaPrice;
  const sqlUpdate = 'UPDATE pizza SET pizzaPrice = ? WHERE pizzaId = ?';
  db.query(sqlUpdate, [price, pizzaId], (err, result) => {
    if (err) console.log(err);
  });
});
// Update PizzaName
app.put('/api/updateName', (req, res) => {
  const pizzaId = req.body.pizzaId;
  const name = req.body.pizzaName;
  const sqlUpdate = 'UPDATE pizza SET pizzaName = ? WHERE pizzaId = ?';
  db.query(sqlUpdate, [name, pizzaId], (err, result) => {
    if (err) console.log(err);
  });
});
// Update PizzaIngredients
app.put('/api/updateIngrediens', (req, res) => {
  const pizzaId = req.body.pizzaId;
  const name = req.body.ingredients;
  const sqlUpdateIngredients =
    'UPDATE pizza SET ingredients = ? WHERE pizzaId = ?';
  db.query(sqlUpdateIngredients, [name, pizzaId], (err, result) => {
    if (err) console.log(err);
  });
});
// Update PizzaPriceFamily
app.put('/api/updatePriceF', (req, res) => {
  const pizzaId = req.body.pizzaId;
  const priceF = req.body.pizzaPriceF;
  const sqlUpdatePriceF = 'UPDATE pizza SET pizzaPriceF = ? WHERE pizzaId = ?';
  db.query(sqlUpdatePriceF, [priceF, pizzaId], (err, result) => {
    if (err) console.log(err);
  });
});
// Register Admin
app.post('/api/register', (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const email = req.body.email;
  const sureName = req.body.sureName;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    const sqlInsertAdmin =
      'INSERT INTO adminSystem (userName,password,email,sureName) VALUES (?,?,?,?)';
    db.query(
      sqlInsertAdmin,
      [userName, hash, email, sureName],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get('/api/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

// Login Admin
app.post('/api/login', (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  const sqlSelectAdmin = 'SELECT * FROM adminSystem WHERE userName = ?';
  db.query(sqlSelectAdmin, userName, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          res.send(result);
        } else {
          res.send({ message: 'Fel användarnamn eller lösenord!' });
        }
      });
    } else {
      res.send({ message: 'Användaren existerar inte!' });
    }
  });
});

// Get Admin
app.get('/api/getAdmin', (req, res) => {
  const sqlSelectAdmin = 'SELECT * FROM adminsystem';
  db.query(sqlSelectAdmin, (err, result) => {
    res.send(result);
  });
});
// Delete Admin
app.delete('/api/deleteAdmin/:id', (req, res) => {
  const user = req.params.id;
  const sqlDeleteAdmin = 'DELETE FROM adminsystem WHERE id = ?';
  db.query(sqlDeleteAdmin, user, (err, result) => {
    if (err) console.log(err);
  });
});
// ### Post Order ### //
app.post('/api/insertOrder', (req, res) => {
  const firstName = req.body.firstName;
  const sureName = req.body.sureName;
  const phone = req.body.phone;
  const epost = req.body.epost;
  const postNumber = req.body.postNumber;
  const adress = req.body.adress;
  const date = new Date();
  const pizzaName = req.body.pizzaName;
  const pizzaPrice = req.body.pizzaPrice;
  const quantity = req.body.quantity;
  const ingredients = req.body.ingredients;

  const sqlInsertOrder =
    'INSERT INTO pizzaorder (firstName,sureName,phone,epost,postNumber,adress,date,pizzaName,pizzaPrice,quantity,ingredients) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
  db.query(
    sqlInsertOrder,
    [
      firstName,
      sureName,
      phone,
      epost,
      postNumber,
      adress,
      date,
      pizzaName,
      pizzaPrice,
      quantity,
      ingredients,
    ],
    (err, result) => {
      //console.log(result);
    }
  );
});
// ### Get Order ### //
app.get('/api/getOrder', (req, res) => {
  const sqlSelectOrder = 'SELECT * FROM pizzaorder';
  db.query(sqlSelectOrder, (err, result) => {
    res.send(result);
  });
});
// ### Delete Order ### //
app.delete('/api/deleteOrder/:id', (req, res) => {
  const order = req.params.id;
  const sqlDeleteOrder = 'DELETE FROM pizzaorder WHERE id = ?';
  db.query(sqlDeleteOrder, order, (err, result) => {
    if (err) console.log(err);
  });
});

//-------------------------------------------------------//
app.post('/create-checkout-session', async (req, res) => {
  const items = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items,
    mode: 'payment',
    success_url: 'http://localhost:3000/done?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:3000/cart',
  });

  res.json({ id: session.id });
});

app.post('/verify-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);
    console.log('Session', session);
    if (session) {
      if (session.payment_status === 'paid') {
        res.json({ isVerfied: true });
        const items = await stripe.checkout.sessions.listLineItems(
          req.body.sessionId
        );
        const result = users.find((user) => user.url === items.url);

        if (!result) {
          users.push(items);
          fs.writeFile(
            'ordersList.json',
            JSON.stringify(users, null, 2),
            (err) => {
              // Checking for errors
              if (err) throw err;

              console.log('Done writing'); // Success
            }
          );
        }
      } else throw new Error('Not paid');
    } else {
      throw new Error('No session');
    }
  } catch (error) {
    console.error(error);
    res.json({ isVerfied: false });
  }
});

// Server port
app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
