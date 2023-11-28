import MovieCard from "../components/ui/MovieCard";
import React, {useState} from "react";

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
        },
        {
            Title: "Captain Marvel",
            Director: 'Director dude',
            Starring: 'A lot of strong people',
            Genre: 'Thriller - Action',
            imdbID: 'tt4154664',
            Poster: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
        },
    ]

    return (
        <div>
            <div>
                {cards.map ((card) =>{
                    return <MovieCard
                    image={card.Poster}
                    title={card.Title}
                    genre={card.Genre}
                    direct={card.Director}
                    cast={card.Starring}
                    item={card.imdbID}
                    addFavorite={() => addFavorite (card.imdbID)}
                    removeFavorite={() => removeFavorite(card.imdbID)}
                    isFavorite={favorites.includes(card.imdbID)}
                    />
                })}
            </div>
        </div>
    )
}

export default HomeScreen;