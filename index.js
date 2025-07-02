const express = require('express');
const app = express();
const connectDB = require("./db/database");
      // const con = require('../nodeproject/db/database');
const bodyparser = require('body-parser');
const router = require('./controller/router');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const PORT = 4000;
app.use(cookieParser());
app.use(
  session({
    key: "user_sid",
    secret: "somerandonstuffs",
    resave: "false",
    saveUninitialized: false,
    cookie: {
       expires:6000,


    },
  })

);



app.set('view engine', 'ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('image'));
app.use(express.static('upload'));


app.use(router);
connectDB().then((conn) => {
 app.listen(PORT, () => {
    console.log("Server running at port: ", PORT)
  });
}).catch((err) => {
  console.log("Failed to spin a server: ",err);
 
})


