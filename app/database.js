const sqlite3 = require('sqlite3').verbose();

// Открываем базу данных SQLite
const db = new sqlite3.Database('./database.db');

// Создаем таблицу пользователей, если она не существует
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    dob DATE
)`);

// Функция для регистрации пользователя
function registerUser(username, email, password, role, dob, callback) {
    db.run(`INSERT INTO users (username, email, password, role, dob) VALUES (?, ?, ?, ?, ?)`,
        [username, email, password, role, dob],
        function(err) {
            if (err) {
                callback(err.message);
            } else {
                callback(null, this.lastID);
            }
        }
    );
}

// Функция для аутентификации пользователя
function authenticateUser(username, password, callback) {
    db.get(`SELECT * FROM users WHERE username = ? AND password = ?`,
        [username, password],
        function(err, row) {
            if (err) {
                callback(err.message);
            } else if (!row) {
                callback("Неверное имя пользователя или пароль");
            } else {
                callback(null, row);
            }
        }
    );
}

module.exports = {
    registerUser,
    authenticateUser
};
