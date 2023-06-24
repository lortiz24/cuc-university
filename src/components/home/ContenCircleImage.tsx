import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'
import { useTranslation } from 'react-i18next'

export const ContenCircleImage = () => {
    const theme = useTheme()
    const { origin } = useGetOrigin()
    const { t } = useTranslation()
    return (
        <Grid
            container
            height={'100%'}
            display='flex'
        >
            <Grid
                item
                xs={12}
                lg={5}
                xl={6}
                padding={{ xs: 5, lg: 5 }}
                display={{ xs: 'none', lg: 'block' }}
                sx={{
                    maxWidth: '900px',
                    backgroundImage: `url(${origin}/assets/mano-start.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 35% bottom 45%',
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
                xl={6}
                height={'100%'}
                padding={{ xs: 5, lg: 10, xl: 15 }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
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
                >{t('home.circle-section.title')}</Typography>
                <Typography
                    lineHeight={2}
                    variant='body2'
                    fontSize={{ xs: 15, sm: 20 }}

                    color={'#FFFFFF'}
                    // fontSize={{ xs: 20, sm: 27, md: 25 }}
                    textAlign={'end'}
                >{t('home.circle-section.body')}
                </Typography>
            </Grid>

        </Grid>
    )
}