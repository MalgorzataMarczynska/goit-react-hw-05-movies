export const API_KEY = `bf9c4d58b7779ca7f547438ec065a7d2`;
export const API_URL = `https://api.themoviedb.org/3/trending/`;
export const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;
export const popularMovies = async (pageNo = 1) => {
  const movies = await (
    await fetch(`${API_URL}movie/week?api_key=${API_KEY}&page=${pageNo}`)
  ).json();
  const genreIds = await (await fetch(`${GENRE_URL}${API_KEY}`)).json();
  return { movies, genreIds };
};
