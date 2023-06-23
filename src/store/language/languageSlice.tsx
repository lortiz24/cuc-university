import { Language } from '@/interfaces/language.interface';
import { createSlice } from '@reduxjs/toolkit';

interface languageState {
    languageSelected: Language
}


const initialState: languageState = {
    languageSelected: 'en'
};
export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguageSlice: (state, { payload }) => {
            state.languageSelected = payload
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    changeLanguageSlice,
} = languageSlice.actions;
