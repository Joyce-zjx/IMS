const { pool } = require("../connection");

class User {
  static async create({ username, email, password }) {
    try {
      const [result] = await pool.execute(
        "INSERT INTO users (username, email, password, created_at) VALUES (?, ?, ?, NOW())",
        [username, email, password]
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async findByEmail(email) {
    try {
      const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async findAll() {
    try {
      const [rows] = await pool.execute("SELECT * FROM users");
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
