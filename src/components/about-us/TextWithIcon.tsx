import React from 'react';
import {
    Box,
    Typography,
    ListItem,
    ListItemIcon,
} from '@mui/material';
import { useGetOrigin } from '@/hooks/useGetOrigin';


interface Props {
    children: React.ReactNode;
    havIcon?: boolean
    icon?: React.ReactNode
    colorText?: string
}
export const TextWithIcon = ({ children, havIcon = false, icon, colorText = '#626970' }: Props) => {
    const { origin } = useGetOrigin()
    return (
        <ListItem>
            <ListItemIcon sx={{ minWidth: 4 }}>
                {!havIcon && < Box
                    style={{
                        width: '50px',
                        height: '50px',
                        backgroundImage: `url(${origin}/assets/start.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                />}
                {
                    havIcon && icon
                }
            </ListItemIcon>

            <Typography variant="body2" lineHeight={2} gutterBottom color={colorText}>
                {children}
            </Typography>
        </ListItem>
    )
}
