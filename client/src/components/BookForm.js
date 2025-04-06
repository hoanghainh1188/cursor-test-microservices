import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const BookForm = ({ newBook, setNewBook, categories, onSubmit }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Thêm sách mới
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Tên sách"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Tác giả"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          sx={{ mr: 2 }}
        />
        <FormControl sx={{ minWidth: 120, mr: 2 }}>
          <InputLabel>Thể loại</InputLabel>
          <Select
            value={newBook.category}
            label="Thể loại"
            onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">
          Thêm sách
        </Button>
      </form>
    </Box>
  );
};

export default BookForm; 