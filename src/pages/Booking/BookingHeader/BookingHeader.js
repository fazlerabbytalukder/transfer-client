import { Container, Grid } from '@mui/material';
import React from 'react';
import busImg from '../../../images/booking bus .jpg';
import Calender from '../../Shared/Calender/Calender';

const BookingHeader = ({date, setDate}) => {
    return (
        <Container style={{marginTop:'25px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '350px' }} src={busImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default BookingHeader;