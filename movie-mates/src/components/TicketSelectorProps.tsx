import React, { useState } from 'react';
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

type TicketSelectorProps = {
    maxTickets?: number;
    onTicketChange: (ticketCount: number) => void;
};

const TicketSelector: React.FC<TicketSelectorProps> = ({ maxTickets = 10, onTicketChange }) => {
    const [ticketCount, setTicketCount] = useState(1);

    const increaseTickets = () => {
        setTicketCount(prevCount => {
            const newCount = prevCount < maxTickets ? prevCount + 1 : prevCount;
            onTicketChange(newCount);
            return newCount;
        });
    };

    const decreaseTickets = () => {
        setTicketCount(prevCount => {
            const newCount = prevCount > 1 ? prevCount - 1 : prevCount;
            onTicketChange(newCount);
            return newCount;
        });
    };

    return (
        <div className="flex flex-col items-center gap-1">
            <button onClick={increaseTickets} disabled={ticketCount === maxTickets}>
                <IoChevronUpOutline size={28}/>
            </button>
            <div className="h-[52px] w-[174px] border border-[#D9D9D9] rounded-2xl flex justify-center items-center text-base">
                <p className='font-semibold'>Tickets</p>
                <span className="mx-2 font-semibold">{ticketCount}</span>
            </div>
            <button onClick={decreaseTickets} disabled={ticketCount === 1}>
                <IoChevronDownOutline size={28}/>
            </button>
        </div>
    );
};

export default TicketSelector;
