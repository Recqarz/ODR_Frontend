import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../store/user-actions';


const columns = [
    // { id: 'name', label: 'Name', minWidth: 170 },
    // { id: 'organizationName', label: 'Org Name', minWidth: 170 },
    // { id: 'email', label: 'Email', minWidth: 170 },
    // { id: 'mobile', label: 'Mobile', minWidth: 100 },
    // { id: 'role', label: 'Role', minWidth: 100 },

    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'mobile', label: 'Mobile', minWidth: 100 },
    { id: 'email', label: 'Email ID', minWidth: 170 },
    { id: 'number-of-case', label: 'Cases Added', minWidth: 170 },
    { id: 'status', label: 'Status', minWidth: 170 },
    { id: 'action', label: 'Action', minWidth: 170 },
];


const Clients = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const dispatch = useDispatch();
    const { allUserData, pagination, loading, error } = useSelector(state => state.user);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        dispatch(getAllUsers(1, 10, 'user')); 
    }, [dispatch]);


    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table className='user-table' stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
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
                        {allUserData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={user._id}>
                                    {columns.map((column) => {
                                        const value = user[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align || 'left'}>
                                                {value}
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
                count={pagination.totalItems}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>
        </>
    )
}

export default Clients