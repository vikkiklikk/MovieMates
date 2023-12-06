import {FaArrowLeft} from "react-icons/fa6";
import Footer from "../components/Footer";
import BigButton from "../components/ui/BigButton";
import { useNavigate, useParams } from "react-router-dom";
import { Movie } from "../types";
import { useEffect, useState } from "react";
import { fetchMovieData } from "../api/api-tmdb";

const Payment: React.FC = () => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const { title } = useParams<{ title: string }>(); // Retrieve the movie title of URL parameters

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
    
    const navigate = useNavigate ();
    //navigation for the back arrow, goes back one page
    const handleBackClick = () => {
        navigate(-1);
    };
    //navigation for "Confirm" button
    const goToPaymentConfirmation = () => {
        if (movie && movie.title) {
            navigate (`/movie/${movie.title}/paymentsucceed`);
        } else { //the case where no movie is found
        }
    };

    const buttons = [
        {title: "Purchase"}
    ];

    return (
        <div>
            <div>
                <div>
                    <FaArrowLeft onClick={handleBackClick} />
                </div>
                <p>dropdown to choose type of payment</p>
                <p>Card number</p>
                <p>date</p>
                <p>cvc</p>
                <p>name on card</p>
                <div>
                {buttons.map((button)=>{
                    return <BigButton key={button.title} title={button.title} onClick={goToPaymentConfirmation}></BigButton>})}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Payment;