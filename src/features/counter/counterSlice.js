import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1
        },
        reset: (state) => {

            state.value = 0
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload)
        },
    },
})


export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer