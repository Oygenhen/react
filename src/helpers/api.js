

export const makeRequest = (url, method = 'GET', data, headers) => {
  const requestHeaders = new Headers();

  const init = {
    method,
    headers,
    cache: 'default',
  };

  if (headers && headers.length) {
    headers.forEach((header) => {
      requestHeaders.append(header.name, header.value);
    });
  }

  if (method !== 'GET' && data) {
    init.body = JSON.stringify(data);
  }

  return fetch('http://localhost:8080'+url, init)
    .then(response => response.json())
    .catch(err => Promise.reject(err));
};

export const makeApiRequest = (url, method = 'GET', data, headers = []) => {
  const authToken = localStorage.getItem('auth');

  if (authToken) {
    headers.push({
      name: `Authorization`,
      value: `Bearer ${authToken}`
    })
  }


  return makeRequest(url, method, data, headers);
};
