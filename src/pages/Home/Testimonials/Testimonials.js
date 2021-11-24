import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import photo1 from '../../../images/Hanif Enterprice.png';
import photo2 from '../../../images/Hanif Enterprise ac special.jpg';
import photo3 from '../../../images/Royal Coach.jpg';
import photo4 from '../../../images/Saintmartin Hyundai.jpg';
import photo5 from '../../../images/Shohagh Paribahan.jpg';
import photo6 from '../../../images/Ena Transport (Pvt) Ltd.jpg';
import ceo from '../../../images/dp.jpg';

const Testimonials = () => {
    return (
        <Container sx={{ flexGrow: 1, mt:6 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography style={{ textAlign: 'center', color: 'black' }} variant="h5" gutterBottom component="div">
                        PHOTO GALLERY
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6} md={4}>
                            <img style={{ width: '180px' }} src={photo1} alt="" />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <img style={{ width: '180px' }} src={photo2} alt="" />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <img style={{ width: '180px' }} src={photo3} alt="" />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <img style={{ width: '180px' }} src={photo4} alt="" />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <img style={{ width: '180px' }} src={photo5} alt="" />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <img style={{ width: '180px' }} src={photo6} alt="" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography style={{ textAlign: 'center', color: 'black' }} variant="h5" gutterBottom component="div">
                        TESTIMONIALS
                    </Typography>
                    <Box style={{ padding: '20px' }}>
                        <Box style={{padding:'20px 0' }}>
                            <Typography style={{ textAlign: 'center', color: 'black', marginTop:'-30px' }} variant="body1" gutterBottom component="div">
                                <i style={{color:'#CC2262'}} class="fas fa-quote-left fa-2x"></i>
                                I made this website for help people who suffer a lot for booking any bus ticket in bangladesh and they do not compare bus ticket price which one is better for you. Our Company will help us to save your money with happy and comfortable journey.
                                <i style={{color:'#CC2262'}} class="fas fa-quote-right fa-2x"></i>
                            </Typography>
                            <img style={{ width: '60px', borderRadius: '50%', padding:'10px 0' }} src={ceo} alt="" />
                            <Typography style={{ textAlign: 'center', color: 'black' }} variant="body2" gutterBottom component="div">
                                Fazle Rabby Talukder - CEO of transfer
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Testimonials;