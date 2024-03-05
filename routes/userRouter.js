const express = require("express");
const router = express.Router();


const {getUsers,getUserID,updateUser}=require('../controller/userController');

router.route('/').get(getUsers)
router.route('/:id').get(getUserID).put(updateUser)

module.exports=router