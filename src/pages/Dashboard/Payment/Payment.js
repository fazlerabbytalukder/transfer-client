import React from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const { bookingId } = useParams();
    return (
        <div>
            <h1>please pay for:{bookingId} </h1>
        </div>
    );
};

export default Payment;