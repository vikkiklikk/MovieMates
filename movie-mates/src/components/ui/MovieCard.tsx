import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Movie } from "../../types";
import { Link } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites";

// I take Movie from types.ts, there are the props I need
interface MovieCardProps  {
    movie: Movie;
} 

const MovieCard: React.FC<MovieCardProps> = ({movie }) => {
    // the favorite function for the favorite button
    const { addFavorite, removeFavorite, isFavorite} = useFavorites();
    const favorite = isFavorite(movie.imdbID);

    const handleFavoriteClick = () => {
        if (favorite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie.imdbID);
        }
    }
    // making changes to the color of the favorite star when it is clicked
    const starStyle = {
        ...favorite ? {fill: '#FAFF00'} : {fill: 'transparent'}
    }

    return (
        <div className={`w-[10.5rem] h-[15.5rem] rounded-2xl border p-1 pt-3`}>
            <div className={`flex`}>
                <button className={`place-self-start relative inline-block`} onClick={handleFavoriteClick}>
                    {/*I'm using two stars that overlay each other, couldn't find a star that I could change fill and border */}
                    <FaRegStar  className="absolute"/>
                    <FaStar  style={starStyle}/>
                </button>
                <Link to={`/movie/${movie.title}`}>
                    <div className={`flex justify-center  pl-2`}>
                        <img className={`w-[6.75rem] h-[10rem] rounded-2xl`} src={movie.posterPath} alt={movie.title} />
                    </div>
                </Link>
            </div>
            <Link to={`/movie/${movie.title}`}>
                <div className={`flex flex-col gap-y-0.5 py-1 mt-4 mx-2`}>
                    <h2 className={`text-sm font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis`}>{movie.title}</h2>
                    <p className={`text-[0.5rem]`}>{movie.genres.join(',')}</p>
                    {/*<p className={`text-xs whitespace-nowrap overflow-hidden overflow-ellipsis`}>Director: {movie.director}</p>
                    <p className={`text-xs whitespace-nowrap overflow-hidden overflow-ellipsis`}>Starring: {movie.cast.join(',')}</p>*/}
                </div>
            </Link>
        </div>
       
    )
}

export default MovieCard;