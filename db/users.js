require('dotenv').config()
const User = require("../models/users-model");
const seedData = require("./users.json");

User.deleteMany({})
    .then(() => {
        return User.insertMany(seedData);
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
        process.exit();
    });