import React, { useEffect, useState } from 'react';
import api from '../services/api';

const UserTickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                // Replace with actual user ID logic.
                const userId = localStorage.getItem('userId'); // Assume you store user ID in local storage.
                const response = await api.get(`/tickets/${userId}`);
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    return (
        <div>
            <h2>Your Booked Tickets</h2>
            <ul>
                {tickets.map(ticket => (
                    <li key={ticket._id}>
                        Seat Number: {ticket.seatNumber} - Bus ID: {ticket.busId}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserTickets;