const express = require('express');
const { getAll, create } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAll);
router.post('/', create);

// TODO: router.put('/:id', …), router.delete('/:id', …)

module.exports = router;

