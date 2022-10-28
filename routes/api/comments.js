const express = require('express');
const router = express.Router();
const commentCtrl = require('../../controllers/comments');
/*---------- Public Routes ----------*/
router.post('/', commentCtrl.create);
router.get('/:id', commentCtrl.getAll);
/*---------- Protected Routes ----------*/

module.exports = router;