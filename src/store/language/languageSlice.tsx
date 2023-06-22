import { createSlice } from '@reduxjs/toolkit';

interface languageState {
    languageSelected: string
}


const initialState: languageState = {
    languageSelected: 'en'
};
export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, { payload }) => {
            state.languageSelected = payload
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    changeLanguage,
} = languageSlice.actions;
