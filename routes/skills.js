var express = require('express');
var router = express.Router();


const skillsCtrl = require('../controllers/skills')


//all actual paths start with '/skills'



//GET /skills
router.get('/', skillsCtrl.index);

//GET new skill
router.get('/new', skillsCtrl.new)

//GET / skills/:id
router.get('/:id', skillsCtrl.show);

//new post
router.post('/', skillsCtrl.create);

module.exports = router;
