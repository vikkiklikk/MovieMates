import React, { useState } from 'react';

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
        <div className="flex items-center">
            <button onClick={decreaseTickets} disabled={ticketCount === 1}>-</button>
            <span className="mx-2">{ticketCount}</span>
            <button onClick={increaseTickets} disabled={ticketCount === maxTickets}>+</button>
        </div>
    );
};

export default TicketSelector;
