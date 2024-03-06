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
  const { id, name, username, city } = req.params;
  const userbyID = users.find((user) => user.id === Number(id));

  if (!userbyID) {
    return res
      .status(404)
      .json({ success: false, msg: `no user with id ${id}` });
  }
  const newUserName = users.map((user) => {
    if (user.id === Number(id)) {
      user.name = name;
      user.username = username;
      user.address.city = city;
    }
    return user;
  });
  res.status(200).json({ success: true, user: newUserName });
};
//creating a user
const createUser = (req, res) => {
  const { id, name, username, email } = req.body;
  // const {street,suite,city,zipcode,geo}=req.body
  const { phone, website, company } = req.body;

  if (!id && !name && username && email) {
    return res
      .status(404)
      .json({ success: false, msg: `you need fill more info to add a user` });
  }

  res
    .status(201)
    .json({
      success: true,
      users: [...users, { id, name, username, email, phone, website, company }],
    });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const userbyID = users.find((user) => user.id === Number(id));

  if (!userbyID) {
    return res
      .status(404)
      .json({ success: false, msg: `no user with id ${id}` });
  }
  const newUsers = users.filter((user) => user.id !== Number(req.params.id));
  return res.status(200).json({ success: true, users: newUsers });
};

module.exports = {
  getUsers,
  getUserID,
  updateUser,
  createUser,
  deleteUser,
};
