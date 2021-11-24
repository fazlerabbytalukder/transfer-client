import React, { useState } from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';


const buttonDesign2 = {
    backgroundColor: '#CC2060',
    padding: '5px 10px',
    borderRadius:'3px'
}

const AddReview = () => {
    const [review, setReview] = useState({})
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    console.log(user);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);

        const newReviewData = { ...review };
        newReviewData[field] = value;

        // console.log(newLoginData);
        setReview(newReviewData);
    }

    const handleReiewSubmit = e => {
        const reviewInfo = {
            ...review,
            img:user.photoURL
        }

        //send data to the serer
        fetch('https://young-refuge-32091.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            })
        
        e.preventDefault();
    }
    return (
        <>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, textAlign:'left', color:"#CC2060" }}>Please Gave Us Your Valuable Review</Typography>
            <form onSubmit={handleReiewSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                <TextField
                    id="outlined-basic"
                    required
                    label="your Name"
                    onBlur={handleOnBlur}
                    name="name"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    required
                    name="star"
                    type='number'
                    onBlur={handleOnBlur}
                    label="Rate (0-5)"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                <TextField
                    id="outlined-basic"
                    required
                    name="review"
                    onBlur={handleOnBlur}
                    label="Your Review"
                    sx={{ width: "50%", backgroundColor: "white", mb: 1 }} />
                
                {success && <Alert severity="success">Service Added Successfully</Alert>}
                <Button type="submit" style={{width:'50%',...buttonDesign2, color:'white', backgroundColor:'#CC2060'}}>Submit</Button>
            </form>
        </>
    );
};

export default AddReview;