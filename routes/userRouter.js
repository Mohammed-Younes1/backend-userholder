const express = require("express");
const router = express.Router();


const {getUsers,getUserID}=require('../controller/userController');

router.route('/').get(getUsers)
router.route('/:id').get(getUserID)

module.exports=router