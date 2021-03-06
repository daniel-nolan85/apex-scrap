const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const { readdirSync } = require('fs');
require('dotenv').config();

// app
const app = express();

// db
mongoose
  .connect(process.env.MONGODB_URI || process.env.DATABASE)
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log(`DB CONNECTION ERR ${err}`));

// middleware
app.use(morgan('dev'));
app.use(express.json({ limit: '2mb' }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// routes middleware
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
