const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.use(bodyParser.json());

var User = require('./User');

// Create User
router.route('/').post(
    (req, res) => {
        User.create(
            {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
            },
            (err, user) => {
                if (err) 
                    return res.status(500).send("There was a problem updating the database");
                return res.status(200).send(user);
            }
        );
    }
);

// Get All Users
router.route('/').get(
    (req, res) => {
        User.find({}, (err, users) => {
        if (err) 
            return res.status(500).send("There no user found");
        return res.status(200).send(users);
        }
    );

    }
);

module.exports = router;

