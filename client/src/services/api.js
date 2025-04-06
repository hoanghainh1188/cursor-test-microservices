import axios from 'axios';

const BOOK_SERVICE_URL = 'http://localhost:3001/api';
const CATEGORY_SERVICE_URL = 'http://localhost:3002/api';

export const bookService = {
  getBooks: async (sortBy) => {
    const response = await axios.get(`${BOOK_SERVICE_URL}/books${sortBy ? `?sortBy=${sortBy}` : ''}`);
    return response.data;
  },

  addBook: async (book) => {
    const response = await axios.post(`${BOOK_SERVICE_URL}/books`, book);
    return response.data;
  },
};

export const categoryService = {
  getCategories: async () => {
    const response = await axios.get(`${CATEGORY_SERVICE_URL}/categories`);
    return response.data;
  },

  addCategory: async (category) => {
    const response = await axios.post(`${CATEGORY_SERVICE_URL}/categories`, category);
    return response.data;
  },
}; 