// drawerSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        isOpen: true,
    },
    reducers: {
        toggleDrawer: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleDrawer } = drawerSlice.actions;

export default drawerSlice;
