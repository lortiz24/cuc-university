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
                
                height={{ xs: 400, lg: 500, xl: 630 }}
                sx={{
                    zIndex: 1,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <CircleBanner
                    src={`/assets/Negro_con_Escudo.png`}
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
