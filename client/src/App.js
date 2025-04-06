import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import BookForm from './components/BookForm';
import CategoryForm from './components/CategoryForm';
import BookList from './components/BookList';
import SortSelect from './components/SortSelect';
import { bookService, categoryService } from './services/api';

function App() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', category: '' });
  const [newCategory, setNewCategory] = useState({ name: '' });
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, [sortBy]);

  const fetchBooks = async () => {
    try {
      const data = await bookService.getBooks(sortBy);
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await categoryService.getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      await bookService.addBook(newBook);
      setNewBook({ title: '', author: '', category: '' });
      fetchBooks();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      await categoryService.addCategory(newCategory);
      setNewCategory({ name: '' });
      fetchCategories();
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Quản lý thư viện
        </Typography>

        <CategoryForm
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          onSubmit={handleAddCategory}
        />

        <BookForm
          newBook={newBook}
          setNewBook={setNewBook}
          categories={categories}
          onSubmit={handleAddBook}
        />

        <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
        <BookList books={books} />
      </Box>
    </Container>
  );
}

export default App; 