import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'

export const ContenCircleImage = () => {
    const theme = useTheme()
    const { origin } = useGetOrigin()
    return (
        <Grid
            container
            height={'100%'}
            display='flex'
        // sx={{ backgroundColor: "red", }}
        >
            <Grid
                item
                xs={12}
                lg={5}
                padding={{ xs: 5, lg: 5 }}
                display={{ xs: 'none', lg: 'block' }}
                sx={{
                    maxWidth: '900px',
                    backgroundImage: `url(${origin}/assets/mano-start.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    height: '100%',
                    width: '100%',
                    minHeight: '500px'
                }}
            >
            </Grid>
            <Grid
                item
                xs={12}
                lg={7}
                padding={{ xs: 5, lg: 10 }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant='h2'
                    color={theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize={50}
                    marginBottom={{ xs: 2, xl: 4 }}
                    textAlign={'end'}
                >With a primary emphasis on business education,</Typography>
                <Typography
                    lineHeight={2}
                    variant='body2'
                    fontSize={{ xs: 15, sm: 20 }}

                    color={'#FFFFFF'}
                    // fontSize={{ xs: 20, sm: 27, md: 25 }}
                    textAlign={'end'}
                >CUC Unisersity is dedicated to providing students with the essential knowledge and skils to thrive in the competitive global marketplace.
                </Typography>
            </Grid>

        </Grid>
    )
}