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
        text:{
            primary:'#405262'
        }
    },
    typography: {
        allVariants: {
            color: '#405262',
        },
    },

})

