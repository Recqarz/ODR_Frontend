import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQuery } from '../../store/query-action';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {ButtonGroup, FormControl, InputLabel, MenuItem, Paper, Select, Typography, } from "@mui/material";
import Header from '../../pages/Header';
import Footer from '../../pages/Footer';

const Query = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createQuery(formData))
        setFormData({
            name: '',
            email: '',
            phone: '',
            description: '',
            category: ''
        });
    };

    return (
        <>
        <div className="query-page">
            <Header />
            <div className="bound">
            <h3 className='h3 m-t20'>Raise A Ticket</h3>
            <p>Need assistance or have an issue to report? Simply fill out the form, and we’ll get back to you as soon as possible!</p>
                <div className="form-sec">
                <div className="left-form">
                    <div className="form-box login-box">
                        <h3>Raise A Ticket</h3>
                        <div className="custom-form">
                        <Box className='ticket-form' component="form" onSubmit={handleSubmit}>
                            <TextField  required
                                id="name" label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                // variant="outlined"
                                // size="small"
                                fullWidth
                            />
                            <TextField
                                required
                                id="email"
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                required
                                id="phone"
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                required
                                id="description"
                                label="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                fullWidth
                            />
                            <FormControl required fullWidth>
                                <InputLabel id="demo-simple-select-label" className="Select_language">
                                Select Category
                                </InputLabel>
                                <Select
                                value={formData.category} label="Select Category"
                                name="category" 
                                onChange={handleChange} required 
                                >
                                <MenuItem value={"Technical Issue"}>Technical Issue</MenuItem>
                                <MenuItem value={"Dispute"}>Dispute</MenuItem>
                                <MenuItem value={"General Inquiries"}>General Inquiries</MenuItem>
                                </Select>
                            </FormControl>
                            <Button className='rg-btn left-eft' type="submit">Submit Query</Button>
                        </Box>
                       
                        </div>
                    </div>
                </div>
                <div className="login-img">
                    <img src="images/Raise-Ticket.png" alt="Raise a Ticket" />
                </div>
                </div>
                <Footer />
            </div>
        </div>
   </> );
};

export default Query;
