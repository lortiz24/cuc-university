import React from 'react'
import { Grid} from '@mui/material'
import { CircleBanner } from '../circle-banner/CircleBanner'

export const AdmisionsUp = () => {
    return (
        <Grid container >
            <Grid
                item xs={12}
                minHeight={'auto'}
                width={'100%'}
                marginBottom={10}
                height={{ xs: 400, lg: 650, xl: 720 }}
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
                    src={`/assets/NegroSinEdit.jpg`}
                    tittle='ADMISSIONS'
                    borderRadiusLg='400px'
                    borderRadiusMd='200px'
                    borderRadiusSm='200px'
                >
                </CircleBanner>
            </Grid>
            
        </Grid >
    )
}
