import React from 'react';
import {
    Box,
    Typography,
    ListItem,
    ListItemIcon,
} from '@mui/material';
import { useGetOrigin } from '@/hooks/useGetOrigin';


interface Props {
    children: React.ReactNode
}
export const TextWithIcon = ({ children }: Props) => {
    const { origin } = useGetOrigin()
    return (
        <ListItem>
            <ListItemIcon sx={{ minWidth: 4 }}>
                <Box
                    style={{
                        width: '50px',
                        height: '50px',
                        backgroundImage: `url(${origin}/assets/start.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                />
            </ListItemIcon>
            <Typography variant="body2" lineHeight={2} gutterBottom color={(theme) => theme.palette.secondary.main}>
                {children}
            </Typography>
        </ListItem>
    )
}
