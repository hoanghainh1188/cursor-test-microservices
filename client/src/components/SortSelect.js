import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const SortSelect = ({ sortBy, setSortBy }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Sắp xếp theo</InputLabel>
        <Select
          value={sortBy}
          label="Sắp xếp theo"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <MenuItem value="">Không sắp xếp</MenuItem>
          <MenuItem value="title">Tên sách</MenuItem>
          <MenuItem value="author">Tác giả</MenuItem>
          <MenuItem value="category">Thể loại</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect; 