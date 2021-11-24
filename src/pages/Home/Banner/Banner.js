import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner.jpg';
import time from '../../../images/clock.png';
import area from '../../../images/pin.png';
import phone from '../../../images/telephone-call.png';

const backgroundImage = {
    width: "100%",
    height: "470px",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    backgroundImage: "url(" + banner + ")"
}

const button1 = {
    backgroundColor: '#CC2262',
    padding: '15px 33px',
    color: 'white'
}
const button2 = {
    backgroundColor: 'white',
    padding: '15px 33px',
    color: 'black'
}

const flexItem = {
    display: 'flex',
    alignItems: 'center'
}

const Banner = () => {
    return (
        <>
            <Box style={backgroundImage}>
                <Box>
                    <Typography style={{ fontWeight: '500', size: '50px', color: 'white', letterSpacing: '2px', paddingTop: '120px' }} variant="h2" gutterBottom component="div">
                        NEED A RIDE?
                    </Typography>
                    <Typography style={{ size: '16px', color: 'white', marginTop: '-23px', letterSpacing: '4px' }} variant="subtitle1" gutterBottom>
                        YOU'VE COME TO THE RIGHT PLACE.
                    </Typography>
                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
                        <Button style={{ ...button1, marginRight: '50px' }}>OUR SERVICES</Button>
                        <Button style={{ ...button2 }}>MAKE BOOKING</Button>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ flexGrow: 1, paddingRight: '90px', paddingLeft: '90px' }}>
                <Grid style={{ marginTop: '-50px' }} container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ minWidth: 275, backgroundColor: '#CC2262' }}>
                            <CardContent>
                                <Box style={flexItem}>
                                    <img style={{ width: '50px', marginRight: '10px' }} src={time} alt="" />
                                    <Box>
                                        <Typography variant='h4' sx={{ fontSize: 17, color: 'white', fontWeight: 500, textAlign: 'left' }}>
                                            Opening Hours
                                        </Typography>
                                        <Typography variant='h6' sx={{ fontSize: 13, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                                            24 hour open. You Can Enter any time in our website.
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ minWidth: 275, backgroundColor: 'gray' }}>
                            <CardContent>
                                <Box style={flexItem}>
                                    <img style={{ width: '50px', marginRight: '10px' }} src={area} alt="" />
                                    <Box>
                                        <Typography variant='h4' sx={{ fontSize: 17, color: 'white', fontWeight: 500, textAlign: 'left' }}>
                                            Our Location
                                        </Typography>
                                        <Typography variant='h6' sx={{ fontSize: 13, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                                            Sukrabad, Dhanmondi 32 <br /> Dhaka, Bangladesh
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ minWidth: 275, backgroundColor: '#CC2262' }}>
                            <CardContent>
                                <Box style={flexItem}>
                                    <img style={{ width: '50px', marginRight: '10px' }} src={phone} alt="" />
                                    <Box>
                                        <Typography variant='h4' sx={{ fontSize: 17, color: 'white', fontWeight: 500, textAlign: 'left' }}>
                                            Call Us
                                        </Typography>
                                        <Typography variant='h6' sx={{ fontSize: 13, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                                            +0081234566732 <br />
                                            +0081324354546
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Banner;