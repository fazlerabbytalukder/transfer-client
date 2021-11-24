import React, { useEffect, useState } from 'react';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const ManageAllBookings = () => {
    const [bookingData, setBookingData] = useState([])
    const [approveId, setApproveId] = useState('');
    useEffect(() => {
        fetch('https://young-refuge-32091.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setBookingData(data));
    }, [approveId])
    

    //update data pending to approved
    const handleUpdate = (id) => {
        
        const url = `https://young-refuge-32091.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfull');
                    setApproveId(id);
            }
        })
    }

    //handle delete
    const handleDelete = (id) => {
        setApproveId(id);
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://young-refuge-32091.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = bookingData.filter(user => user._id !== id);
                        setBookingData(remainingOrder);
                        // window.reload();
                    }
                });
        }
    }
    return (
        <div>
            <h2 style={{color:'#D42A60', fontSize:'30px'}}>Manage All Bookings</h2>
            <Container>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">email</TableCell>
                            <TableCell align="center">Service</TableCell>
                            <TableCell align="center">date</TableCell>
                            <TableCell align="center">status</TableCell>
                            <TableCell align="center">approval</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookingData.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{row.yourName}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.serviceName}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center"><Button onClick={() => handleUpdate(row._id)} variant='contained' style={{backgroundColor:'#D42A60'}}>approve</Button></TableCell>
                                <TableCell align="center"><Button onClick={() => handleDelete(row._id)} variant='contained' style={{backgroundColor:'#D42A60'}}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </div>
    );
};

export default ManageAllBookings;