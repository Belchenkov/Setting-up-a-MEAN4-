const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect Mongo
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/meanGary', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get Users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                console.log(response);
                res.json(response);
            })
            .catch((err) => {
                console.log(err);
                sendError(err, res);
            });
    });
});

module.exports = router;