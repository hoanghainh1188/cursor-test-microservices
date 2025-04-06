import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const CategoryForm = ({ newCategory, setNewCategory, onSubmit }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Thêm thể loại mới
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Tên thể loại"
          value={newCategory.name}
          onChange={(e) => setNewCategory({ name: e.target.value })}
          sx={{ mr: 2 }}
        />
        <Button type="submit" variant="contained">
          Thêm thể loại
        </Button>
      </form>
    </Box>
  );
};

export default CategoryForm; 