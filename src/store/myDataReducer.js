import { createSlice } from '@reduxjs/toolkit';

const myDataReducer = createSlice({
    name: 'myData',
    initialState: { value: null },
    reducers: {
        setMyData: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setMyData } = myDataReducer.actions;
export default myDataReducer.reducer;