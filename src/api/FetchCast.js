export const API_KEY = `bf9c4d58b7779ca7f547438ec065a7d2`;
export const API_URL = `https://api.themoviedb.org/3/`;

export const fetchCast = async id => {
  const credit = await (
    await fetch(`${API_URL}movie/${id}/credits?api_key=${API_KEY}`)
  ).json();
  return { credit };
};
