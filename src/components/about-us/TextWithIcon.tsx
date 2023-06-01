import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Grid,
} from '@mui/material';


interface Props {
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    children: React.ReactNode
}
export const TextWithIcon = ({ endIcon, startIcon, children }: Props) => {
    return (
        <ListItem>
            <ListItemIcon sx={{ minWidth: 4 }}>
                {startIcon && startIcon}
            </ListItemIcon>
            <Typography variant="body2" lineHeight={2} gutterBottom color={(theme) => theme.palette.secondary.main}>
                {children}
            </Typography>
            {endIcon && endIcon}
        </ListItem>
    )
}
