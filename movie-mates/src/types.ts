//this is for the MovieCard component, these are what I want to fetch from api-tmdb.ts
export interface Movie {
    title: string;
    posterPath: string;
    director: string;
    cast: string[];
    genres: string[];
    imdbID: string;
  }
  