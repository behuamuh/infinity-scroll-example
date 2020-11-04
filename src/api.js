import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async (start, limit = 10) => {
  const url = `${API_URL}/posts?_start=${start}&_limit=${limit}`;

  return axios(url);
};
