const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Обработчик регистрации пользователя
app.post('/register', (req, res) => {
    const { username, email, password, role, dob } = req.body;
    database.registerUser(username, email, password, role, dob, (err, userId) => {
        if (err) {
            res.status(400).send({ error: err });
        } else {
            res.status(201).send({ message: `Пользователь ${username} успешно зарегистрирован`, userId });
        }
    });
});

// Обработчик аутентификации пользователя
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    database.authenticateUser(username, password, (err, user) => {
        if (err) {
            res.status(401).send({ error: err });
        } else {
            res.status(200).send({ message: `Пользователь ${username} успешно вошел в систему`, user });
        }
    });
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});