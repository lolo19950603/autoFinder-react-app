const express = require('express');
const router = express.Router();
const carsCtrl = require('../../controllers/api/cars');


router.get('/', carsCtrl.index);
router.get('/:id', carsCtrl.show);

module.exports = router;