import { Alert, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleAvailableBooking from '../SingleAvailableBooking/SingleAvailableBooking';

const AvailableBooking = ({ date }) => {
    const [services, setServices] = useState([]);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect(() => {
        fetch('https://young-refuge-32091.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <Container>
            <h2 style={{ margin: '30px 0', color: '#CC2060' }}> <span style={{ color: 'black' }}>Available booking Dhaka to Cox's bazar on <br/></span> {date.toDateString()}</h2>
            {setBookingSuccess && <Alert severity="success">booking success</Alert>}
            <Grid container spacing={2}>
                {
                    services.map(service => <SingleAvailableBooking
                        key={service._id}
                        service={service}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></SingleAvailableBooking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableBooking;