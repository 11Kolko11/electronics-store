require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// health‑check ендпоінт
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// підключення до MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Mongo connection error:', err);
  });
