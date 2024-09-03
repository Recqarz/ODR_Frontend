import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQuery } from '../../store/query-action';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {ButtonGroup, FormControl, InputLabel, MenuItem, Paper, Select, Typography, } from "@mui/material";

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
    };

    return (
        <>
        <div className="login-page">
            <div className="bound">
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
                                // labelId="demo-simple-select"
                                // id="demo-simple-select"
                                value={formData.category} label="Select Category"
                                name="category" value={formData.category} onChange={handleChange} required >
                                <MenuItem value={"Category 1"}>Category 1</MenuItem>
                                <MenuItem value={"Category 2"}>Category 2</MenuItem>
                                <MenuItem value={"Category 3"}>3</MenuItem>
                                </Select>
                            </FormControl>
                            <Button className='rg-btn left-eft' type="submit">Submit Query</Button>
                        </Box>
                        {/* <form onSubmit={handleSubmit}>
                            <div>
                                <label>Name:</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Phone:</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Description:</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} required />
                            </div>
                            <div>
                                <label>Category:</label>
                                <select name="category" value={formData.category} onChange={handleChange} required >
                                    <option value="">Select a category</option>
                                    <option value="Category 1">Category 1</option>
                                    <option value="Category 2">Category 2</option>
                                    <option value="Category 3">Category 3</option>
                                </select>
                            </div>
                            <button type="submit">Submit Query</button>
                        </form> */}
                        
                        </div>
                    </div>
                </div>
                <div className="login-img">
                    <img src="images/Raise-Ticket.png" alt="Raise a Ticket" />
                </div>
                </div>
            </div>
        </div>
   </> );
};

export default Query;
