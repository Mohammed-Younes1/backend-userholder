const express = require("express");
const router = express.Router();


const {getUsers,getUserID,updateUser,createUser,deleteUser}=require('../controller/userController');

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserID).put(updateUser).delete(deleteUser)

module.exports=router