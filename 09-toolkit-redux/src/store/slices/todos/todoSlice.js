import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
    },
});

export const { increment } = todoSlice.actions