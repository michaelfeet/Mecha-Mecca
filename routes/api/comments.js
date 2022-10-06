const express = require('express');
const router = express.Router();
const commentCtrl = require('../../controllers/comments');

router.post('/', commentCtrl.create);
router.get('/:id', commentCtrl.getAll);

module.exports = router;