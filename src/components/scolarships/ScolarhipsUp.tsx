import React from 'react'
import { Grid, } from '@mui/material'
import { CircleBanner } from '../circle-banner/CircleBanner'
import { CircleBannerWithImage } from '../circle-banner/CircleBannerWithImage'


export const ScolarhipsUp = () => {
    return (
        <Grid container >
            <Grid
                item xs={12}
                minHeight={'auto'}
                width={'100%'}
                marginBottom={4}
                sx={{
                    zIndex: 1,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/*  <CircleBanner
                    src={`/assets/graduadas.png`}
                    tittle='SCHOLARSHIPS'
                    borderRadiusLg='400px'
                    borderRadiusMd='200px'
                    borderRadiusSm='200px'
                    fontSize={{ xs: '12vw', md: '8vw' }}
                /> */}
                <CircleBannerWithImage
                    src={`/assets/graduadas.png`}
                    tittle='ADMISSIONS' />
            </Grid>
        </Grid >
    )
}
