const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, '../data/books.json');

if (!fs.existsSync(path.dirname(dataPath))) {
  fs.mkdirSync(path.dirname(dataPath), { recursive: true });
}

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, JSON.stringify([], null, 2));
}

app.get('/api/books', (req, res) => {
  const { sortBy } = req.query;
  const books = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  if (sortBy) {
    books.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }
  
  res.json(books);
});

app.post('/api/books', (req, res) => {
  const books = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const newBook = {
    id: Date.now().toString(),
    ...req.body
  };
  
  books.push(newBook);
  fs.writeFileSync(dataPath, JSON.stringify(books, null, 2));
  
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Book service running on port ${PORT}`);
}); 