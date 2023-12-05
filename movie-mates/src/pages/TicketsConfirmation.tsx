import {FaArrowLeft} from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import BigButton from "../components/ui/BigButton";

const TicketsConfirmation: React.FC = () => {
    const { time, room } = useParams<{ time: string,room: string }>();

    const buttons = [
        {title: "Confirm"}
    ];

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };
    const goToPayment = () => {
        navigate ('/movie/&{title}/Payment');
       };

    return (
        <div>
            <div>
                <FaArrowLeft onClick={handleBackClick} />
            </div>
            <div>
                <h3>Your selection</h3>
                <div>
                    <p>movie title</p>
                    <p>Cinema</p>
                    <p>Date</p>
                    <p>{time}</p>
                    <p>{room}</p>
                </div>
            </div>
            <div className='pt-4'>
                    {buttons.map((button)=>{
                        return <BigButton key={button.title} title={button.title} onClick={goToPayment}></BigButton>})}
                </div>
            <Footer/>
        </div>

    );
};

export default TicketsConfirmation;