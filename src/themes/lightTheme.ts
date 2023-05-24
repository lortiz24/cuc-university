import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#C29508',
        },
        secondary: {
            main: '#405262'
        },
        text: {
            primary: '#405262'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1100,
            xl: 1536,
        },
    },
    typography: {
        allVariants: {
            color: '#405262',
        },
    },

})

