const express = require('express');
const router = express.Router();

router.get('/type', (req, res) => {
    res.render('links/type');
})

module.exports = router;