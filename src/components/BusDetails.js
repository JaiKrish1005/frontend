import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useParams } from 'react-router-dom';
import TicketBooking from './TicketBooking';

const BusDetails = () => {
    const { id } = useParams();
    const [bus, setBus] = useState(null);

    useEffect(() => {
        const fetchBusDetails = async () => {
            try {
                const response = await api.get(`/buses/${id}`);
                setBus(response.data);
            } catch (error) {
                console.error('Error fetching bus details:', error);
            }
        };

        fetchBusDetails();
    }, [id]);

    return (
        <div>
            {bus ? (
                <>
                    <h2>{bus.name}</h2>
                    <p>{bus.details}</p>
                    <p>Total Seats: {bus.totalSeats}</p>
                    <p>Available Seats: {bus.availableSeats}</p>
                    <TicketBooking busId={bus._id} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BusDetails;