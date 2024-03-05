let { users } = require("../data/users");

const getUsers = (req, res) => {
  res.status(200).json({ success: true, users: users });
};

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
module.exports = {
  getUsers,
  getUserID
};
