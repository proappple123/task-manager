const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const { User, Task } = require('./models');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

sequelize.sync().then(() => {
  console.log('Database connected');
});

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
