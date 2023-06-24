import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Alumna } from './Alumna';
import { useTranslation } from 'react-i18next';

export const AboutUsSectionUp = () => {
    const { t } = useTranslation()
    return (
        <Grid container marginTop={20}>
            <Grid
                item
                xs={12} lg={5}
                // paddingLeft={{ xs: 0, xl: 20 }}
                paddingX={{ xs: 4, }}
                paddingBottom={{ xs: 4 }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                }}
            >
                <Typography
                    variant='h2'
                    color={(theme) => theme.palette.primary.main}
                    lineHeight={0.3}
                    fontWeight="bold"
                    fontSize={{ xs: 25, sm: 60 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'start'}
                >
                    {t('aboutUs.title')} <Typography
                        variant='caption'
                        lineHeight={1.2}
                        color={(theme) => theme.palette.secondary.main}
                        fontSize={{ xs: 25, sm: 60 }}
                        marginBottom={{ xs: 1, md: 4 }}
                        textAlign={'start'}
                    >
                        {t('aboutUs.title-body')}
                    </Typography>
                </Typography>

                <Typography
                    variant='body2'
                    fontSize={{ xs: 15, sm: 20 }}
                    lineHeight={1.8}
                    style={{ marginBottom: '16px' }}
                >
                    {t('aboutUs.body-one')}
                </Typography>

                <Typography
                    variant='body2'
                    color={'#626970'}
                    lineHeight={1.8}
                    fontSize={{ xs: 15, sm: 20 }}
                >
                    {t('aboutUs.body-tow')}

                </Typography>
            </Grid>
            <Grid
                item xs={12}
                lg={7}
                marginTop={{ xs: 2, md: 0 }}
                minHeight={{ xs: '300px', sm: '600px' }}
                display='flex'
                flexDirection='column'
                alignItems='center'
                sx={{ zIndex: -20, }}
            >
                <Alumna
                    item1={`/assets/Alumna-3.png`}
                    backgroundImage={`/assets/City-1.jpg`}
                    withBackgroundImage={false}
                />
            </Grid>
        </Grid >

    )
}
