const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, '../data/categories.json');

if (!fs.existsSync(path.dirname(dataPath))) {
  fs.mkdirSync(path.dirname(dataPath), { recursive: true });
}

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, JSON.stringify([], null, 2));
}

app.get('/api/categories', (req, res) => {
  const categories = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  res.json(categories);
});

app.post('/api/categories', (req, res) => {
  const categories = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const newCategory = {
    id: Date.now().toString(),
    ...req.body
  };
  
  categories.push(newCategory);
  fs.writeFileSync(dataPath, JSON.stringify(categories, null, 2));
  
  res.status(201).json(newCategory);
});

app.listen(PORT, () => {
  console.log(`Category service running on port ${PORT}`);
}); 