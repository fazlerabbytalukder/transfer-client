import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import logo1 from '../../../images/logo1.jpg';
import logo2 from '../../../images/logo2.jpg';
import logo3 from '../../../images/logo3.jpg';
import logo5 from '../../../images/logo5.jpg';
import logo4 from '../../../images/logo4.jpg';

const OurPartners = () => {
    return (
        <Container sx={{ flexGrow: 1, my:6 }}>
            <Typography style={{ textAlign: 'center', color: '#CC2262', marginBottom:'10px' }} variant="h4" gutterBottom component="div">
                OUR PARTNERS
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4} md={2}>
                    <img style={{width:'150px'}} src={logo1} alt="" />
                </Grid>
                <Grid item xs={4} md={2}>
                    <img style={{width:'150px'}} src={logo2} alt="" />
                </Grid>
                <Grid item xs={4} md={2}>
                    <img style={{width:'150px'}} src={logo3} alt="" />
                </Grid>
                <Grid item xs={4} md={2}>
                    <img style={{width:'150px'}} src={logo4} alt="" />
                </Grid>
                <Grid item xs={4} md={2}>
                    <img style={{width:'150px'}} src={logo5} alt="" />
                </Grid>
                <Grid item xs={4} md={2}>
                    <img style={{width:'150px'}} src={logo2} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurPartners;