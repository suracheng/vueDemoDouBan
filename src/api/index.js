
import axios from 'axios';

// 使用代理
const HOST = process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:8082';

export const API_TYPE = {
  movie: {
    in_theaters : 'in_theaters', // 正在上映
    coming_soon : 'coming_soon'  // 即将上映
  }
};

export function fetch (url) {
    return axios.get(HOST + url);
}

export function fetchMoviesByType (type, start = 0, count = 20) {
  return fetch(`/movie/${type}?start=${start}&count=${count}`);
}

export function fetchMovieById(id) {
  return fetch(`/movie/subject/${id}`);
}

export function fetchSearchMovies (query, start = 0) {
  let url = encodeURI(`/movie/search?q=${query}&start=${start}`);
  return fetch(url);
}
