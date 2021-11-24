import React from 'react';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const buttonDesign = {
    backgroundColor: '#CC2060',
    padding: '0 10px',
    borderRadius: '3px'
}
const buttonDesign2 = {
    backgroundColor: '#CC2060',
    padding: '5px 10px',
    borderRadius: '3px'
}
const buttonDesign3 = {
    border: '1px solid #CC2060',
    padding: '5px 10px',
    borderRadius: '3px'
}
const buttonDesign4 = {
    color: '#CC2060',
    textDecoration: 'none'
}

const Navigation = () => {
    const { user, logout } = useAuth();
    console.log(user);
    return (
        <>
            <nav className="navbar container navbar-expand-lg navbar-light bg-transperent">
                <div className="container-fluid">
                    <img style={{ width: '100px' }} src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={{ ...buttonDesign4 }} to='/home'><Button color="inherit">Home</Button></Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ ...buttonDesign4 }} to='/booking'><Button color="inherit">Booking</Button></Link>
                            </li>
                            {
                                user?.email ? <>
                                    <li className="nav-item">
                                        <Link style={{ ...buttonDesign4 }} to='/dashboard'><Button color="inherit">Dashboard</Button></Link>
                                    </li>
                                    <Button style={{ color: '#CC2060', marginRight: '7px', ...buttonDesign3 }}>{user?.displayName}</Button>
                                    <Button style={{ ...buttonDesign2, color: 'white' }} onClick={logout} color="inherit">Logout</Button>
                                </>
                                    :
                                    <NavLink style={{ textDecoration: "none", color: 'white', ...buttonDesign }} to='/login'><Button color="inherit">Login</Button></NavLink>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;