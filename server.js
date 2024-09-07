const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const app = express();

// Посредники Middlewares
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'JJJJJJHHHHHHHHCCCCCDDDDDD';

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/cars', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => console.log('MongoDB подключен'))
  .catch(error => console.log(error));

// Маршруты (routes)
// Регистрация в системе
app.post('/api/reg', async (req, res) => {
  const { login, password } = req.body;

  // Проверяем, если такой пользователь уже существует
  const existsingUser = await User.findOne({ login });
  if (existsingUser) {
    return res.status(401).json({ message: 'Пользователь уже существует' });
  }

  // Хэширование пароля
  const hashedPassword = await bcrypt.hash(password, 10);

  // Создание нового пользователя
  const newUser = new User({
    login,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).json({ message: 'Пользователь зарегистирован' });
});

// Вход в систему
app.post('/api/login', async (req, res) => {
  const { login, password } = req.body;

  // Поиск пользователя по login
  const user = await User.findOne({ login });
  if (!user) {
    return res.status(400).json({ message: 'Неверный логин или пароль' });
  }

  // Проверяем пароль
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Неверный логин или пароль' });
  }

  // Создаем JWT токен
  const token = jwt.sign(
    { id: user._id, login: user.login },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token, message: "Успешный вход" });
});

app.get('/api/profile', async (req, res) => {
  const token = req.headers['authаorization'];

  console.log(token);

  if (!token) {
    return res.status(401).json({ message: 'Токен не предоставлен' });
  }

  const tokenNoBearer = token.split(' ')[1];
  // Проверка токена
  try {
    const decoded = jwt.verify(tokenNoBearer, JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    res.status(200).json({ login: user.login, role: user.role });
  } catch (err) {
    return res.status(401).json({message: "Неверный токен"});
  }
});

app.get('/', (req, res) => {
  res.send('API Worked');
});



const PORT = 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT} - http://localhost:5000`));