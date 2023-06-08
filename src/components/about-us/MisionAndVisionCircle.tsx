import React from 'react'
import { Grid, useTheme } from '@mui/material';
import { CircleImage } from '../circle-image/CircleImage';
import { MisionAndVision } from './MisionAndVision';

export const MisionAndVisionCircle = () => {
    const theme = useTheme()
    return (
        <Grid container paddingX={{ xs: 2, sm: 5, lg: 10, xl: 15 }} >
            <Grid
                item
                xs={12}
                width={'100%'}
                sx={{ position: 'relative', top: -20, zIndex: 1 }}>
                <CircleImage
                    src={`/assets/figura2.png`}
                    backgroundColor={theme.palette.background.paper}
                    backgroundPosition='center'
                    backgroundSize='contain'
                    whithouBoxBackground
                >
                    <MisionAndVision />
                </CircleImage>
            </Grid>
        </Grid>
    )
}
