import React, { useState } from 'react';
import api from '../services/api';

const TicketBooking = ({ busId }) => {
    const [seatNumber, setSeatNumber] = useState('');

    const handleBooking = async () => {
        try {
            // Replace with actual user ID logic.
            const userId = localStorage.getItem('userId'); // Assume you store user ID in local storage.
            await api.post('/tickets', { userId, busId, seatNumber });
            alert('Ticket booked successfully!');
        } catch (error) {
            console.error('Error booking ticket:', error);
            alert('Failed to book ticket.');
        }
    };

    return (
        <div>
            <h3>Book a Ticket</h3>
            <input
                type="number"
                placeholder="Seat Number"
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
                required
            />
            <button onClick={handleBooking}>Book Ticket</button>
        </div>
    );
};

export default TicketBooking;