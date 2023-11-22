const apiKey = process.env.REACT_APP_API_KEY;

const fetchMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular`,
      options
    );

    const data = await response.json();
    return data.results.map((movie) => ({
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      title: movie.title,
      description: movie.overview,
    }));
  } catch (error) {
    console.error("Fetching movies failed:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};

export { fetchMovies };
