import {FaArrowLeft} from "react-icons/fa6";
import Footer from "../components/Footer";
import BigButton from "../components/ui/BigButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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

    //retrieving the total price from previous page  
    const location = useLocation();
    const totalAmount = location.state?.total;

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

    //State variables for the card information inputs
    const [paymentType, setPaymentType] = useState('card'); // Default to card
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert('Payment information submitted (dummy data, no real transaction)');
        // Here you can reset the form or navigate to another page
    };

    return (
        <div>
            <div className="pb-16 pt-7 px-7">
                <div>
                    <FaArrowLeft size={24} onClick={handleBackClick} />
                </div>
                <p className="text-lg font-semibold my-7">Total price {totalAmount} kr.</p>
                <div className="w-[320px] mt-3">
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="flex gap-4">
                            <label>
                                <input 
                                    type="radio" 
                                    value="card" 
                                    checked={paymentType === 'card'} 
                                    onChange={() => setPaymentType('card')}
                                />
                                Credit/Debit Card
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value="applepay" 
                                    checked={paymentType === 'applepay'} 
                                    onChange={() => setPaymentType('applepay')}
                                />
                                Apple Pay
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <label className="italic">Card Number</label>
                            <input className="w-[320px] h-[50px] rounded-2xl bg-green"
                                type="text" 
                                value={cardNumber} 
                                onChange={(e) => setCardNumber(e.target.value)} 
                                placeholder="1234 5678 9012 3456"
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <label className="italic">Expiry Date</label>
                                <input className="w-[150px] h-[50px] rounded-2xl bg-green"
                                    type="text" 
                                    value={expiry} 
                                    onChange={(e) => setExpiry(e.target.value)} 
                                    placeholder="MM/YY"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="italic">CVC</label>
                                <input className="w-[150px] h-[50px] rounded-2xl bg-green"
                                    type="text" 
                                    value={cvv} 
                                    onChange={(e) => setCvv(e.target.value)} 
                                    placeholder="123"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="italic">Cardholder name</label>
                            <input className="w-[320px] h-[50px] rounded-2xl bg-green"
                                type="text"
                                value={cardHolderName} 
                                onChange={(e) => setCardHolderName(e.target.value)} 
                                placeholder="John Doe"
                            />
                        </div>
                    </form>
                </div>
                <div className="mt-7">
                {buttons.map((button)=>{
                    return <BigButton key={button.title} title={button.title} onClick={goToPaymentConfirmation}></BigButton>})}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Payment;