import { Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import BookingModal from '../BookingModal/BookingModal';

const SingleAvailableBooking = ({ service, date, setBookingSuccess }) => {
    const { serviceName, img, price, firstTrip, lastTrip, tripNumber, star } = service;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardMedia
                    style={{ width: '90px', height: '90px', borderRadius: '50%', margin: '0 auto', marginTop: '10px' }}
                    component="img"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Stack style={{ display:'flex', justifyContent:'center', alignItems:'center'}} spacing={1}>
                        <Rating name="size-small" defaultValue={star} size="small" readOnly />
                    </Stack>
                    <Typography style={{textTransform:'uppercase', color:'#CC2060'}} variant="h6" component="div">
                        {serviceName}
                    </Typography>
                    <Typography style={{fontSize: '25px' }} variant="h6" color="text.secondary">
                        {price} tk
                    </Typography>
                    <Divider />
                    <Typography style={{textAlign:'left', marginTop:'20px'}} variant="body2" color="text.secondary">
                        <b>Trip Number:</b> {tripNumber}
                    </Typography>
                    <Typography style={{ textAlign: 'left', margin:'5px 0'}} variant="body2" color="text.secondary">
                        <b>Frist Trip:</b> {firstTrip}
                    </Typography>
                    <Typography style={{textAlign:'left'}} variant="body2" color="text.secondary">
                        <b>Last Trip:</b> {lastTrip}
                    </Typography>
                </CardContent>
                <Button onClick={handleBookingOpen} style={{ width: '90%', backgroundColor: '#CC2060', marginBottom: '20px' }} variant="contained">Book Now</Button>
            </Card>
            </Grid>
            <BookingModal
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                service={service}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default SingleAvailableBooking;