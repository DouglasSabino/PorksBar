const { db } = require('./connection');

const modelUsers = {
  postUsers: async (newUser) => {
    const { id, username, hashPassword, salt } = newUser;
    const SQL_POST_USERS = "INSERT INTO users(id, username, hash, salt) VALUES (?,?,?,?)"
    await db.execute(SQL_POST_USERS, [id, username, hashPassword, salt]);
  },
  getUsers: async (username) => {
    const SQL_GET_USERS = "SELECT * FROM users WHERE username=?";
    const [[user]] = await db.execute(SQL_GET_USERS, [username]);
    return user;
  },
}

module.exports = { modelUsers };