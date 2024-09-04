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
import { getAllQueries } from '../../store/query-action';

const queryColumns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'phone', label: 'Phone', minWidth: 130 },
    { id: 'description', label: 'Description', minWidth: 300 },
    { id: 'category', label: 'Category', minWidth: 130 },
    { id: 'createdAt', label: 'Created At', minWidth: 170 },
    { id: 'updatedAt', label: 'Updated At', minWidth: 170 },
];

const Tickets = () => {
    const dispatch = useDispatch();
    const { queries, loading, error } = useSelector((state) => state.querie);
    // console.log(queries)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(getAllQueries());
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
                            {queryColumns.map((column) => (
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
                        {queries
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((query) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={query._id}>
                                    {queryColumns.map((column) => {
                                        const value = query[column.id];
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
                count={queries.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};


export default Tickets