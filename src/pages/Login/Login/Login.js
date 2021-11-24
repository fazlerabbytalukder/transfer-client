import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import googleLogo from '../../../images/google logo.png';
import logo from '../../../images/logo.png';

const Login = () => {
    const [loginData, SetLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        SetLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // alert('hello')
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location,navigate)
    }
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item sx={{ mt: 8, boxShadow: 3, mx:'auto' }} xs={12} md={6}>
                    <img style={{width:"200px"}} src={logo} alt="" />
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            label="Your Email"
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-size-small"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            size="small" />
                        <Button variant="contained" sx={{ width: "75%", m: 1, backgroundColor:'#CC2060' }} type="submit">Login</Button> <br />
                        <Button sx={{my:2, color:'#CC2060'}} variant="text">--------------------- OR ---------------------</Button> <br />
                        <Button onClick={handleGoogleSignIn} sx={{ width: "75%", m: 1, borderColor:'#CC2060',color:'#CC2060' }} variant="outlined"><img src={googleLogo} alt="" style={{width:'25px', color:'#CC2060'}}/>  Sign In With Google</Button> <br />
                        <NavLink style={{ textDecoration: 'none' }} to='/register'><Button sx={{my:2, color:'#CC2060'}} variant="text">New User? Please Register</Button></NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;