require('dotenv').config();

const express = require('express');
const cors = require("cors");
const healthRoutes = require('./routes/healthRoutes');
const databaseRoutes = require('./routes/databaseRoutes');
const postRoutes = require('./routes/postRoutes'); //23-06 w

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API do Tech Challenge - Blogging Educacional',
  });
});

app.use(healthRoutes);
app.use(databaseRoutes);
app.use(postRoutes); //23-06 w

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});