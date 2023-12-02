//here I'm fetching data from the API - I use OMDB (open movie database)
import { Movie } from "../types";

const API_KEY = 'cff0b8c88e413bd53c0feb755e14ce33';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovieData = async (title: string): Promise<Movie | null> => {
    try {
        //search for the movie by title
        const searchResponse = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`);
        const searchData = await searchResponse.json();

        //see if we have some resault
        if (searchData.results.length === 0) {
            throw new Error('No movies found with the given title.');
        }

        //Use the ID of the first search result
        const movieId = searchData.results[0].id;

        // Fetch movie details
        const movieResponse = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        const movieDetails = await movieResponse.json();

        //Fetch info for director and cast
        const creditsResponse = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
        const credits = await creditsResponse.json();

        // Find director name
        const director = credits.crew.find((person: any) => person.job === 'Director')?.name || 'Unknown';

        // Map genres array to string array
        const genres = movieDetails.genres.map((genre: any) => genre.name);

        // Map cast array to string array (top 5 cast members)
        const cast = credits.cast.slice(0, 5).map((member: any) => member.name);

        return {
            title: movieDetails.title,
            posterPath: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
            director,
            cast,
            genres,
            imdbID: movieId.toString(),
          };
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
};