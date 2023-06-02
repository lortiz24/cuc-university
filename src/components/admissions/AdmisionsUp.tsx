import React from 'react'
import { Grid, useTheme, Typography } from '@mui/material'
import { CircleBanner } from './CircleBanner'

export const AdmisionsUp = () => {
    const theme = useTheme()
    return (
        <Grid container >
            <Grid
                item xs={12}
                minHeight={'auto'}
                width={'100%'}
                marginBottom={10}
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
                    src={`/assets/City-1.jpg`}
                    height={450}
                >
                </CircleBanner>
            </Grid>
            <Grid item xs={12} minHeight={'auto'} width={'100%'} sx={{ zIndex: 1, position: 'relative', top: -35, }}>

            </Grid>
        </Grid >
    )
}
