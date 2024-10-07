import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const BusList = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        const fetchBuses = async () => {
            try {
                const response = await api.get('/buses');
                setBuses(response.data);
            } catch (error) {
                console.error('Error fetching buses:', error);
            }
        };

        fetchBuses();
    }, []);

    return (
        <div>
            <h2>Available Buses</h2>
            <ul>
                {buses.map(bus => (
                    <li key={bus._id}>
                        <Link to={`/buses/${bus._id}`}>{bus.name}</Link> - Available Seats: {bus.availableSeats}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BusList;