import { makeApiRequest } from './api';

export const createBook = async (bookData) => {
  return makeApiRequest('/books', 'POST', bookData);
};

export const searchBooks = async (searchParams) => {
  const getSearchQuery = (params) => {
    let queryString = '';

    Object.entries(params).forEach(([param, value]) => {
      if (value) {
        if (!queryString) {
          queryString += '?';
        } else {
          queryString += '&';
        }

        queryString += `${encodeURIComponent(param)}=${encodeURIComponent(value)}`;
      }
    });

    return queryString;

  };

  return makeApiRequest(`/books?${getSearchQuery(searchParams)}`);
};
