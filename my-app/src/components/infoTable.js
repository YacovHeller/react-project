import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


let user;
if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'))
}
const objects = ['address', 'company']
const keys = Object.keys(user).filter(a => !(objects.indexOf(a) >= 0))

const addresDetails = Object.keys(user.address).filter(a => a != 'geo')
const companyDetails = Object.keys(user.company).filter(a => a != 'geo')




export default function SpanningTable() {
    return (
        <TableContainer component={Paper}>
            all info
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">

                <TableBody >
                    {keys.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{row}</TableCell>
                            <TableCell colSpan={2} align="center">{user[row]}</TableCell>
                        </TableRow>
                    ))}

                    <TableCell rowSpan={addresDetails.length + 1} >Address</TableCell>
                    {addresDetails.map((item, idx) =>
                        <TableRow key={idx}>
                            <TableCell colSpan={1}>{item}</TableCell>
                            <TableCell align="center">{user.address[item]}</TableCell>
                        </TableRow>
                    )}
                    <TableCell rowSpan={companyDetails.length + 1} >Address</TableCell>
                    {companyDetails.map((item, idx) =>
                        <TableRow key={idx}>
                            <TableCell colSpan={1}>{item}</TableCell>
                            <TableCell align="center">{user.company[item]}</TableCell>
                        </TableRow>
                    )}
                    
                </TableBody>
            </Table>
        </TableContainer>
    );
}