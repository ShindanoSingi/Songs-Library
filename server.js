require('dotenv').config()

const express = require("express");
const methodOverride = require('method-override');
const usersController = require("./controllers/usersController");

const app = express();

app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.static(__dirname + '/' + 'public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.use(usersController);

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
    console.log("The app is running on port " + PORT);
});
