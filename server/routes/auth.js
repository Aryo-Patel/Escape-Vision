//initializes the router that will deal solely with server related routes
const router = require('express').Router();


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
//required models that will be interacted with
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');

//POST      /auth/register
//ACTION    Creates a new teacher account
//Public
router.post('/register', async (req, res) => {

    //checks if the request is to register a teacher or a student
    if (req.body.isTeacher === true) {

        try {
            //validates user by making sure that the users have different names
            let user = (await Student.findOne({ email: req.body.email })) || (await Teacher.findOne({ email: req.body.email }));

            if (user) {
                console.log('in here');
                res.status(400).send('User with this name already created');
            }
            else {
                //initializes the basic teacher body
                const teacher = new Teacher({
                    ...req.body,
                    completedGames: [],
                    currentGames: []
                });

                const salt = await bcrypt.genSalt(10);
                teacher.password = await bcrypt.hash(teacher.password, salt);

                let returnTeacher = await teacher.save();

                const payload = {
                    user: {
                        id: teacher.id
                    }
                }
                console.log('here');
                jwt.sign(payload,
                    config.get('JWTSecret'),
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                        console.log(token);
                        res.json(token);
                    })
                return res.status(200).send('completed');
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: err
            });
        }
    }
    else {

    }
});

module.exports = router;
