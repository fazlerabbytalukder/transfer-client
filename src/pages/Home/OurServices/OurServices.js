import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const OurServices = () => {
    return (
        <Container sx={{ flexGrow: 1, my: 10 }}>
            <Typography style={{ textAlign: 'center', color: 'gray' }} variant="subtitle1" gutterBottom component="div">
                OUR SERVICES
            </Typography>
            <Typography style={{ textAlign: 'center', color: '#CC2262', fontWeight:500, marginBottom:'40px' }} variant="h2" gutterBottom component="div">
                Services We Provide
            </Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i style={{ border: '2px solid black', padding: '17px', borderRadius: '50%' }} class="fas fa-fingerprint fa-3x"></i>
                        <Box style={{ marginLeft: '10px' }}>
                            <Typography style={{ textAlign: 'left', color: '#CC2262' }} variant="body1" gutterBottom component="div">
                                RELIABLE TRANSFERS
                            </Typography>
                            <Typography style={{ textAlign: 'left', color: 'gray' }} variant="body2" gutterBottom component="div">
                                This website is very realiable for you. Our security system is very strong. you can easily pay us.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i style={{ border: '2px solid black', padding: '17px', borderRadius: '50%' }} class="fas fa-wallet fa-3x"></i>
                        <Box style={{ marginLeft: '10px' }}>
                            <Typography style={{ textAlign: 'left', color: '#CC2262' }} variant="body1" gutterBottom component="div">
                                NO BOOKING FEES
                            </Typography>
                            <Typography style={{ textAlign: 'left', color: 'gray' }} variant="body2" gutterBottom component="div">
                                When you book any service you do not do any extra fees for our service. You just pay your ticket fees.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i style={{ border: '2px solid black', padding: '17px', borderRadius: '50%' }} class="far fa-heart fa-3x"></i>
                        <Box style={{ marginLeft: '10px' }}>
                            <Typography style={{ textAlign: 'left', color: '#CC2262' }} variant="body1" gutterBottom component="div">
                                FREE CANCELLATION
                            </Typography>
                            <Typography style={{ textAlign: 'left', color: 'gray' }} variant="body2" gutterBottom component="div">
                                If you cancle any booking for our termes condition you do not need to pay extra money for this.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i style={{ border: '2px solid black', padding: '17px', borderRadius: '50%' }} class="fas fa-phone fa-3x"></i>
                        <Box style={{ marginLeft: '10px' }}>
                            <Typography style={{ textAlign: 'left', color: '#CC2262' }} variant="body1" gutterBottom component="div">
                                24H CUSTOMER SERVICE
                            </Typography>
                            <Typography style={{ textAlign: 'left', color: 'gray' }} variant="body2" gutterBottom component="div">
                                Our website provide 24 hours customer service. Any problem you can call us in our contact number we respopnse.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i style={{ border: '2px solid black', padding: '17px', borderRadius: '50%' }} class="fas fa-bus fa-3x"></i>
                        <Box style={{ marginLeft: '10px' }}>
                            <Typography style={{ textAlign: 'left', color: '#CC2262' }} variant="body1" gutterBottom component="div">
                                QUALITY VEHICLES
                            </Typography>
                            <Typography style={{ textAlign: 'left', color: 'gray' }} variant="body2" gutterBottom component="div">
                                We only produce quality Bus. We dont provide any normal vehicles for our services.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i style={{ border: '2px solid black', padding: '17px', borderRadius: '50%' }} class="fas fa-swatchbook fa-3x"></i>
                        <Box style={{ marginLeft: '10px' }}>
                            <Typography style={{ textAlign: 'left', color: '#CC2262' }} variant="body1" gutterBottom component="div">
                                BOOKING FLEXIBILITY
                            </Typography>
                            <Typography style={{ textAlign: 'left', color: 'gray' }} variant="body2" gutterBottom component="div">
                                Here we provide booking flexibility. any time you kn book bus and any canceletion you need you do that easily.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurServices;