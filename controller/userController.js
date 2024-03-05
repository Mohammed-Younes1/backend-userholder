let { users } = require("../data/users");

//get all users
const getUsers = (req, res) => {
  res.status(200).json({ success: true, users: users });
};
//get user using id
const getUserID = (req, res) => {
  const { id } = req.params;
  const userbyID = users.find((user) => user.id === Number(id));

  if (!userbyID) {
    return res
      .status(404)
      .json({ success: false, msg: `no user with id ${id}` });
  }
  res.status(200).json({ success: true, user: userbyID });
};
// updating user name
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const userbyID = users.find((user) => user.id === Number(id));

  if (!userbyID) {
    return res
      .status(404)
      .json({ success: false, msg: `no user with id ${id}` });
  }
  const newUserName = users.map((user) => {
    if (user.id === Number(id)) {
      user.name = name
    }
    return user
  })
  res.status(200).json({ success: true, user: newUserName });
};


module.exports = {
  getUsers,
  getUserID,
  updateUser,
};
