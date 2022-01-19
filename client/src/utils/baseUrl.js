const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://apex-scrap.herokuapp.com/api'
    : 'http://localhost:8000/api';

export default baseUrl;
