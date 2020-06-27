const router = require('express').Router();

//GET   /auth/
//ACTION
//Public
router.get('/', (req, res) => {
    res.status(200).send('connected');
})

module.exports = router;