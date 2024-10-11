require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const booksRouter = require('./routes/books');

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

// Root route
app.get('/', (req, res) => res.send('Hello World!'));

// Books API routes
app.use('/books', booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
