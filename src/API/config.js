export const API_URL= 'https://api.themoviedb.org/3/'
export const API_KEY= 'e14bd4ebdbd550503bda4a1b35d5c39c'
export const SEARCH_BASE_URL= `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`
export const POPULAR_BASE_URL= `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE = 'w780';
