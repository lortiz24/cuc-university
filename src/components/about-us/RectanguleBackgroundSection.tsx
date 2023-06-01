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
                height: { xs: '400px', sm: '450px', md: '500px' },
                backgroundImage: `url(${origin}/assets/team-work-1-black_and_white.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                zIndex: -10,
            }}
        >
            <MyGradiantBackground color={theme.palette.secondary.main} />
            {children}
        </Box>

    )
}
