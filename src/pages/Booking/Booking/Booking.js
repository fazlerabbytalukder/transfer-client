import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableBooking from '../AvailableBooking/AvailableBooking';
import BookingHeader from '../BookingHeader/BookingHeader';

const Booking = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <BookingHeader date={date} setDate={setDate}></BookingHeader>
            <AvailableBooking date={date}></AvailableBooking>
        </div>
    );
};

export default Booking;