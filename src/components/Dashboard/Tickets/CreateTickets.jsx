import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQuery } from '../../../store/query-action';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize, } from "@mui/material";

const CreateTickets = ({setCurrentBar}) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createQuery(formData))
    setCurrentBar("/tickets")
    
  };

  return (
    <>
      <Box className='ticket-form' component="form" onSubmit={handleSubmit}>
        <TextField required
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
        
        <TextareaAutosize
          required
          id="description"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
        />

        <Button className='rg-btn left-eft' type="submit">Done</Button>
      </Box>
    </>);
};

export default CreateTickets