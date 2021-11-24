import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    Outlet
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const buttonDesign = {
    color: '#CC2060',
    padding: '5px 10px',
    textDecoration: 'none'
}

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />

            {admin ? <Box>
                <Link style={{ textDecoration: 'none', color: '#CC2060', textAlign: "left" }} to='/dashboard/makeAdmin'><Button color="inherit">Make Admin</Button></Link>
                <Link style={{ textDecoration: 'none', color: '#CC2060', textAlign: "left" }} to='/dashboard/manageAllBooking'><Button color="inherit">Manage All Booking</Button></Link>
            </Box>
                :
                <Box>
                    <Link style={{ textDecoration: 'none', color: '#CC2060', textAlign: "left" }} to='/dashboard'><Button color="inherit">Dashboard</Button></Link><br />
                    <Link style={{ textDecoration: 'none', color: '#CC2060', textAlign: "left" }} to='/booking'><Button color="inherit">Booking</Button></Link><br />
                    <Link style={{ textDecoration: 'none', color: '#CC2060', textAlign: "left" }} to='/dashboard/reviews'><Button color="inherit">Add Review</Button></Link><br />
                    
                </Box>

            }
            <Link style={{ textDecoration: 'none', color: '#CC2060', textAlign: "left" }} to='/home'><Button color="inherit">GO To Home</Button></Link> <br />
            <Button style={{ ...buttonDesign }} onClick={logout} color="inherit">Logout</Button>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ background: '#CC2060' }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ color: 'white' }} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
