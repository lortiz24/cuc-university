import React from 'react'
import { Grid, } from '@mui/material'
import { CircleBanner } from '../circle-banner/CircleBanner'


export const ScolarhipsUp = () => {
    return (
        <Grid container >
            <Grid
                item xs={12}
                minHeight={'auto'}
                width={'100%'}
                marginBottom={10}
                height={{ xs: 400, lg: 500, xl: 630 }}
                sx={{
                    zIndex: 1,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    alignItems: 'end'
                }}
            >
                <CircleBanner
                    src={`/assets/graduadas.png`}
                    tittle='SCHOLARSHIPS'
                    borderRadiusLg='400px'
                    borderRadiusMd='200px'
                    borderRadiusSm='200px'
                    fontSize={{ xs: '12vw', md: '8vw' }}
                >
                </CircleBanner>
            </Grid>
        </Grid >
    )
}
