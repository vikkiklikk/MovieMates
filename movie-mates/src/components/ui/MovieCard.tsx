import { FaStar } from "react-icons/fa6";

type Props = {
    image:string;
    title:string;
    genre:string;
    direct:string;
    cast:string;
    item:string;
    addFavorite: (item: string) => void;
    removeFavorite: (item: string) => void;
    isFavorite: boolean;
} 

const MovieCard: React.FC<Props> = ({image, title, genre, direct, cast, item, addFavorite, removeFavorite, isFavorite}) => {
    // the favorite function for the favorite button
    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(item);
        } else {
            addFavorite(item);
        }
    }
    // making changes to the color of the favorite star when it is clicked
    const starStyle = {
        ...isFavorite ? {fill: 'yellow'} : {fill: 'black'}
    }

    return (
        <div className={`w-[10.5rem] h-[15.5rem] rounded-2xl border p-1 shadow-lg`}>
            <div className={`flex`}>
                <button className={`place-self-start`} onClick={handleFavoriteClick}>
                <FaStar style={starStyle}/>
                </button>
                <div className={`flex justify-center`}>
                    <img className={`w-[6.75rem] h-[10rem] rounded-2xl`} src={image} alt="poster" />
                </div>
            </div>
            <div className={`flex flex-col gap-y-0.5 py-1`}>
                <h2 className={`text-sm font-medium whitespace-nowrap overflow-hidden overflow-ellipsis`}>{title}</h2>
                <p className={`text-[0.5rem]`}>{genre}</p>
                <p className={`text-xs whitespace-nowrap overflow-hidden overflow-ellipsis`}>Director: {direct}</p>
                <p className={`text-xs whitespace-nowrap overflow-hidden overflow-ellipsis`}>Starring: {cast}</p>
            </div>
        </div>
    )
}

export default MovieCard;