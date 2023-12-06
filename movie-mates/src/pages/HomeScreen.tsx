// I need to add footer and do the carousel
import MovieCard from "../components/ui/MovieCard";
import React, {useState, useEffect} from "react";
import { fetchMovieData } from "../api/api-tmdb";
import { Movie } from "../types";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import Footer from "../components/Footer";


const HomeScreen: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);

    //here are all the titles of the movies - would connect the API from kvikmyndir here
    //but for now it's just manually put in
    const movieTitles: string[] = [ 'Anatomy of a fall', 'Heimaleikurinn', 'The night of the 12th', 'The Marvels','Joy Ride', 'The Creator', 'Tilverur', 'The last voyage of demeter', 'The Hunger Games: The Ballad of Songbirds & Snakes', 'Napoleon'];

    useEffect(() => {
        const fetchMovies = async () => {
            const moviePromises = movieTitles.map(title => fetchMovieData(title));
            const moviesData = await Promise.all(moviePromises);
            setMovies (moviesData.filter((movie): movie is Movie => movie !== null));
        };
        fetchMovies();
    }, []); 

    return (
        <div>
            <div className="pb-16">
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
                            />
                        ))}
                    </div>
                </div>
            </div> 
            <Footer/>
        </div>       
    );
};

export default HomeScreen;