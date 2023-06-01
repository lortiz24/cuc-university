import React from 'react'
import { CircleImage } from '../circle-image/CircleImage'
import { useTheme } from '@mui/material';
export const MisionAndVision = () => {
    const theme = useTheme()
    return (
        <div>
            <CircleImage
                src={`/assets/figura2.png`}
                backgroundColor={theme.palette.background.paper}
                backgroundPosition='center'
                backgroundSize='containe'
                height={{ xs: 700 }}
            >

            </CircleImage>
        </div>
    )
}
