import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [displayReviews, setDisplayReviews ] = useState([]);
    const [seeAll, SetSeeAll] = useState(false);

    useEffect(() => {
        fetch('https://young-refuge-32091.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setDisplayReviews(data.slice(0, 6));
            });
    }, [])

    const loadMore = () => {
        if (seeAll === false) {
            setDisplayReviews(reviews)
            SetSeeAll(true)
        }
        if (seeAll === true) {
            setDisplayReviews(reviews.slice(0,6))
            SetSeeAll(false)
        }
    }


    return (
        <Container>
            <Box>
            <Typography style={{ fontWeight: '700', size: '35px', margin: '25px 0',color: '#CC2060' }} variant="h4" gutterBottom component="div">
                Happy Customer Review
            </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, mb: 4 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        displayReviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Grid>
            </Box>
            <Button onClick={loadMore} variant="contained" style={{backgroundColor:'#CC2060', marginBottom:"40px"}} >{seeAll === false ? "See All Review" : "See Less"}</Button>
        </Container>
    );
};

export default Reviews;