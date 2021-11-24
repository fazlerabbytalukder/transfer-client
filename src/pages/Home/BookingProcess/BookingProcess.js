import { LocalizationProvider, StaticDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, Grid, TextField, Typography,Container} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';

const button1 = {
    
    backgroundColor: '#CC2262',
    padding: '15px 33px',
    color: 'white',
    fontSize:'20px'
}

const BookingProcess = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Box sx={{mt:10}}>
            <Container sx={{ flexGrow: 1, boxShadow: 4,mt:5 }}>
                <Grid container spacing={2}>
                    <Grid style={{marginTop:'30px'}} item xs={12} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Typography style={{ fontWeight: '500', size: '50px', letterSpacing: '2px', marginTop:'50px' }} variant="h2" gutterBottom component="div">
                        NEED A BUS?
                    </Typography>
                    <Typography style={{ size: '16px', marginTop: '-23px',letterSpacing: '4px',marginBottom:'30px' }} variant="subtitle1" gutterBottom>
                        CLICK HERE TO BOOKING OUR SERVICES
                    </Typography>
                    <Link style={{textDecoration:'none'}} to='/booking'><Button style={{ ...button1 }}>CLICK FOR BOOKING</Button></Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BookingProcess;