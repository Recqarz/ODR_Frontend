import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { getAllConsultations } from '../../../store/consultation-action';


const consultationColumns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 130 },
    { id: 'state', label: 'State', minWidth: 130 },
    { id: 'city', label: 'City', minWidth: 130 },
    { id: 'pincode', label: 'Pincode', minWidth: 100 },
    { id: 'category', label: 'Category', minWidth: 130 },
    { id: 'defaulter_name', label: 'Defaulter Name', minWidth: 170 },
    { id: 'defaulter_email', label: 'Defaulter Email', minWidth: 170 },
    { id: 'createdAt', label: 'Created At', minWidth: 170 },
    { id: 'updatedAt', label: 'Updated At', minWidth: 170 },
];

const ConsultationRequests = () => {
    const dispatch = useDispatch();
    const { consultations, loading, error } = useSelector((state) => state.consultation);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(getAllConsultations());
    }, [dispatch]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {consultationColumns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align || 'left'}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultations
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((consultation) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={consultation._id}>
                                    {consultationColumns.map((column) => {
                                        const value = consultation[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align || 'left'}>
                                                {column.id === 'createdAt' || column.id === 'updatedAt'
                                                    ? new Date(value).toLocaleString()
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={consultations.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};


export default ConsultationRequests