import React from 'react'
import MyGradiantBackground from '../circle-image/ColorBackground'
import { Box, useTheme } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'


interface Props {
    children: React.ReactNode
}
export const RectanguleBackgroundSection = ({ children }: Props) => {
    const { origin } = useGetOrigin()
    const theme = useTheme()

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '1000px',
                backgroundImage: `url(${origin}/assets/Paper.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                zIndex: -10,
            }}
        >
            <MyGradiantBackground color={theme.palette.background.paper} />
            {children}
        </Box>

    )
}
