import MovieCard from "../components/ui/MovieCard";
import React, {useState} from "react";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";


const HomeScreen: React.FC = () => {

    const [favorites, setFavorites] = useState<string[]>([]);

    const addFavorite = (item: string) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFavorite = (item: string) => {
        setFavorites ((prevFavorites) => prevFavorites.filter((favorite) => favorite !== item));
    };

    const cards = [
        {
        //here comes the info from omdb
            Title: 'The Hunger Games: The Ballad of Songbirds and Snakes',
            Director: 'Some guy',
            Starring: 'One guy, another guy, and a woman',
            Genre: 'Thriller - Drama',
            imdbID: 'tt10545296',
            Poster: 'https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg',
            id: 0,
        },
        {
            Title: "Captain Marvel",
            Director: 'Director dude',
            Starring: 'A lot of strong people',
            Genre: 'Thriller - Action',
            imdbID: 'tt4154664',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
            id: 1,
        },
        {
            //here comes the info from omdb
                Title: 'The Hunger Games: The Ballad of Songbirds and Snakes',
                Director: 'Some guy',
                Starring: 'One guy, another guy, and a woman',
                Genre: 'Thriller - Drama',
                imdbID: 'tt10545296',
                Poster: 'https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg',
                id: 2,
            },
            {
                Title: "Captain Marvel",
                Director: 'Director dude',
                Starring: 'A lot of strong people',
                Genre: 'Thriller - Action',
                imdbID: 'tt41546643',
                Poster: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
                id: 3,
            },
            {
                //here comes the info from omdb
                    Title: 'The Hunger Games: The Ballad of Songbirds and Snakes',
                    Director: 'Some guy',
                    Starring: 'One guy, another guy, and a woman',
                    Genre: 'Thriller - Drama',
                    imdbID: 'tt10545296',
                    Poster: 'https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg',
                    id: 4,
                },
                {
                    Title: "Captain Marvel",
                    Director: 'Director dude',
                    Starring: 'A lot of strong people',
                    Genre: 'Thriller - Action',
                    imdbID: 'tt41546645',
                    Poster: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
                    id: 5,
                },
    ]

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
                    {cards.map ((card) =>{
                        return <MovieCard
                        image={card.Poster}
                        title={card.Title}
                        genre={card.Genre}
                        direct={card.Director}
                        cast={card.Starring}
                        item={card.imdbID}
                        key={card.id}
                        addFavorite={() => addFavorite (card.imdbID)}
                        removeFavorite={() => removeFavorite(card.imdbID)}
                        isFavorite={favorites.includes(card.imdbID)}
                        />
                    })}
                </div>
            </div>
        </div>    
    )
}

export default HomeScreen;