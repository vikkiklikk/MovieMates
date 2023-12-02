import MovieCard from "../components/ui/MovieCard";
import React, {useState, useEffect} from "react";
import { fetchMovieData } from "../api/api-tmdb";
import { Movie } from "../types";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";


const HomeScreen: React.FC = () => {

    //making the favorite button function correctly
    const [favorites, setFavorites] = useState<string[]>([]);

    const addFavorite = (item: string) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFavorite = (item: string) => {
        setFavorites ((prevFavorites) => prevFavorites.filter((favorite) => favorite !== item));
    };

    const [movies, setMovies] = useState<Movie[]>([]);

    //here are all the titles of the movies - would connect the API from kvikmyndir here
    //but for now it's just manually put in
    const movieTitles: string[] = ['Dans drottningin', 'Anatomy of a fall', 'Heimaleikurinn', 'The night of the 12th', 'The Marvels','Joy Ride', 'The Creator', 'Tilverur', 'The last voyage of demeter', 'The Hunger Games: The Ballad of Songbirds & Snakes'];

    useEffect(() => {
        const fetchMovies = async () => {
            const moviePromises = movieTitles.map(title => fetchMovieData(title));
            const moviesData = await Promise.all(moviePromises);
            setMovies (moviesData.filter((movie): movie is Movie => movie !== null));
        };
        fetchMovies();
        //const movieTitle ='Inception'; //replace with other titles, here I have to connect api from kvikmyndir
        //fetchMovieData(movieTitle).then(movie => {
        //    if (movie) {
        //        setMovies([movie]);
            
      //  });
    }, []); 

    return (
        <div>
            <div className={`flex justify-end pr-10 py-3`}>
                <h1 className={`text-3xl`}>MovieMates</h1>
            </div>
            <div className={`p-4`}>
                Here comes the carousel
            </div>
            <div className={`flex justify-end pr-6 pb-2`}>
                <IoIosSearch/>
                <HiOutlineAdjustmentsVertical/>
            </div>
            <div className={`flex justify-center`}>
                <div className={`grid grid-cols-2 gap-4`}>
                    {movies.map (movie =>(
                        <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        item={movie.imdbID}
                        addFavorite={() => addFavorite (movie.imdbID)}
                        removeFavorite={() => removeFavorite(movie.imdbID)}
                        isFavorite={favorites.includes(movie.imdbID)}
                        />
                    ))}
                </div>
            </div>
        </div>    
    )
}

export default HomeScreen;