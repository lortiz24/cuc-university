import React from 'react'
import { Grid, Typography, useTheme, Box } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'

export const ContenCircleImage = () => {
    const theme = useTheme()
    const { origin } = useGetOrigin()
    return (
        <Grid
            container
            height={'100%'}
            display='flex'
            padding={{ xs: 5, lg: 10 }}
        >
            <Grid
                item
                xs={12}
                lg={6}
                display={{ xs: 'none', lg: 'block' }}
                sx={{
                    backgroundImage: `url(${origin}/assets/mano-start.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center', 
                    backgroundSize: 'contain',
                    height: '100%',
                    width: '100%',
                }}
            >
                {/* <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${origin}/assets/mano-start.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center', // Modificado para alinear la imagen en la parte superior
                        backgroundSize: '80%',
                        zIndex: 10,
                    }}
                ></Box> */}
            </Grid>
            <Grid
                item
                xs={12}
                lg={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography
                    variant='h2'
                    color={theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize={{ xs: 30, xl: 35 }}
                    marginBottom={{ xs: 2, xl: 4 }}
                    textAlign={'end'}
                >With a primary emphasis on business education,</Typography>
                <Typography
                    variant='body2'
                    color={'#FFFFFF'}
                    fontSize={{ xs: 20, sm: 27, md: 25 }}
                    textAlign={'end'}
                >CUC Unisersity is dedicated to providing students with the essential knowledge and skils to thrive in the competitive global marketplace.
                </Typography>
            </Grid>

        </Grid>
    )
}
