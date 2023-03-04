export const API_KEY = `bf9c4d58b7779ca7f547438ec065a7d2`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=`;
export const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;
export const searchMovies = async (searchValue, searchPage = 1) => {
  const responseMovies = await fetch(
    `${SEARCH_URL}${API_KEY}&query=${searchValue}&page=${searchPage}`
  );
  const responseGenres = await fetch(`${GENRE_URL}${API_KEY}`);
  const movies = await responseMovies.json();
  const genreIds = await responseGenres.json();
  return { movies, genreIds };
};
