import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../types'; 
import { fetchMovieData } from '../api/api-tmdb';
import { FaStar, FaArrowLeft } from "react-icons/fa6";
import useFavorites from '../hooks/useFavorites';
import BigButton from './ui/BigButton';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { FaRegStar } from 'react-icons/fa';

const SelectedMovie: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { title } = useParams<{ title: string }>(); // // Retrieve the movie title of URL parameters

      // fetching the data by the title of the movie
  useEffect(() => {
    if (title) {
      fetchMovieData(title).then(data => {
        if(data) {
            setMovie(data);
        } else {
            console.log("No movie found for the given title");
        }
      });
    }
  }, [title]);

  const navigate = useNavigate();
  //navigation for the back arrow, goes back one page
   const handleBackClick = () => {
    navigate(-1);
   };
   //Navigating to Showtimes page including the title of the movie
   const goToShowtimesPage = () => {
    if (movie && movie.title) {
        navigate (`/movie/${movie.title}/Showtimes`);
    }
   };

  const { addFavorite, removeFavorite, isFavorite} = useFavorites();

  if (!movie) {
    return <div>Loading...</div>;
  }

   // the favorite function for the favorite star
   const favorite = isFavorite(movie.imdbID);

   const handleFavoriteClick = () => {
       if (favorite) {
           removeFavorite(movie.imdbID);
       } else {
           addFavorite(movie.imdbID);
       }
   };
   // making changes to the color of the favorite star when it is clicked
   const starStyle = {
       ...favorite ? {fill: '#FAFF00'} : {fill: 'transparent'}
   };

   const buttons = [
    {title: "Check out showtimes"}
   ]

  return (
    <div>
        <div className='pb-16'>
            <div className='mt-7 flex justify-between px-7'>
                <FaArrowLeft size={24} onClick={handleBackClick}/>
                <button className="relative inline-block" onClick={handleFavoriteClick}>
                    <FaRegStar size={24} className="absolute"/>
                    <FaStar size={24} style={starStyle}/>
                </button>
            </div>
            <div className='mt-7 flex justify-center'>
                <img className='w-[21.75rem] h-[11.75rem] rounded-2xl object-cover' src={movie.posterPath} alt={movie.title} />
            </div>
            <div className='mt-5 px-7 flex flex-col gap-3'>
                <h2 className='text-xl font-bold '>{movie.title}</h2>
                <div>
                    <h4 className='text-sm'>Genre</h4>
                    <h5 className='text-base'>{movie.genres}</h5>
                </div>
                <div>
                    <h4 className='text-sm'>Director</h4>
                    <h3 className='text-base'>{movie.director}</h3>
                </div>
                <div>
                    <h4 className='text-sm'>Starring</h4>
                    <h3 className='text-base'>{movie.cast}</h3>
                </div>
                <div>
                    <h4 className='text-sm'>Description</h4>
                    <h3 className='text-base'>{movie.overview}</h3>
                </div>
                <div className='pt-4'>
                    {buttons.map((button)=>{
                        return <BigButton key={button.title} title={button.title} onClick={goToShowtimesPage}></BigButton>})}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default SelectedMovie;
