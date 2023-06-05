import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#C29508',
        },
        secondary: {
            main: '#405262',
        },
        text: {
            primary: '#405262'
        },
        background: {
            paper: '#F1F1F1'
        },

    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1220,
            xl: 1536,
        },
    },
    typography: {
        allVariants: {
            color: '#405262',
        },
    },



})

