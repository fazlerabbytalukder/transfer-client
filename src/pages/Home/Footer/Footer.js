import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../../../images/logo.png';
const footerBg = {
    backgroundColor: "#1E2226",
}
const footerBg2 = {
    backgroundColor: "#1E2226",
}

const Footer = () => {
    return (
        <div>
            <Box style={footerBg}>
                <Container sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <img style={{ width: "150px" }} src={logo} alt="" />
                            <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                                Transfer is a Ticket Booking website. Here you can book any bus for dhaka to cox's bazar in any company. You can compare to the price and comfort and select any kind of bus of any date.
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                                <i style={{ marginRight: '10px' }} class="fab fa-facebook fa-2x"></i>
                                <i style={{ marginRight: '10px' }} class="fab fa-instagram fa-2x"></i>
                                <i style={{ marginRight: '10px' }} class="fab fa-whatsapp fa-2x"></i>
                                <i style={{ marginRight: '10px' }} class="fab fa-pinterest fa-2x"></i>
                            </Typography>
                        </Grid>



                        <Grid style={{ textAlign: 'center' }} item xs={12} md={4}>
                            <Typography variant='h5' sx={{ my: 2, fontSize: 20, fontWeight: 500, color: 'white' }}>
                                Services We Provide
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300 }}>
                                Found any kind of Busses
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300 }}>
                                Compare price
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300 }}>
                                Pre Booking System
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300 }}>
                                Online Payment System
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300 }}>
                                24 hour service
                            </Typography>
                        </Grid>


                        <Grid item xs={12} md={4}>
                            <Typography variant='h5' sx={{ my: 2, fontSize: 20, fontWeight: 500, textAlign: 'left', color: 'white' }}>
                                <i class="fas fa-map-marked-alt fa-2x"></i> Our Address
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                                Dhanmondi 32, Dhaka, Bangladesh
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Box style={footerBg2}>
                    <Typography variant='h6' sx={{ py: 1, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'center' }}>
                        All Copy Right &copy; received transfer.com 2021
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default Footer;