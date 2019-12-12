import { makeApiRequest } from './api';

export const createBook = async (bookData) => {
  return makeApiRequest('/books', 'POST', bookData);
};

export const addToListCompleted=async(bookId)=>{
  return makeApiRequest('/books/:bookId','PUT', {category:'COMPLETED'});
}
export const addToListPlanned=async(bookId)=>{
  return makeApiRequest('/books/:bookId','PUT', {category:'PLANNED'});
}
export const addToListWanted=async(bookId)=>{
  return makeApiRequest('/books/:bookId','PUT', {category:'WANTED'});
}

export const removeFromList=async(bookId)=>{
  return makeApiRequest('/books/remove/:bookId','DELETE');
}

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
