import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ContentWithBackgrounImage } from '../ui/ContentWithBackgrounImage'
import { useTranslation } from 'react-i18next'

export const ScolarchiptDown = () => {
    const {t} = useTranslation()

    return (
        <Grid
            container
            marginTop={{ xs: 10, lg: 15 }}
            marginBottom={12.5}

        >
            <Grid
                item
                xs={12}
                lg={5}
                display={'flex'}
                justifyContent={'center'}
                flexDirection={'column'}
                paddingLeft={{ xs: 5, sm: 7, md: 10, lg: 7, xl: 15 }}
                paddingRight={{ xs: 5, sm: 7, md: 10, lg: 0 }}
            >
                <Typography
                    variant='body2'
                    fontSize={{ xs: 14, sm: 20 }}
                    style={{ marginBottom: '16px', lineHeight: '2' }}

                >
                    {t("scholarships.parr0")}
                </Typography>
                <Typography
                    variant='body2'
                    fontSize={{ xs: 14, sm: 20 }}
                    style={{ marginBottom: '16px', lineHeight: '2' }}
                >
                    {t("scholarships.parr1")}
                </Typography>
                <Typography
                    variant='subtitle2'
                    fontWeight={'bold'}
                    color={(theme) => theme.palette.primary.main}
                    fontSize={{ xs: 14, sm: 20 }}
                    sx={{ marginBottom: '16px', lineHeight: '2' }}
                >
                    {t("scholarships.parr2")}
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                lg={7}
                marginTop={{ xs: 2, md: 0 }}
                minHeight={{ xs: '300px', sm: '500px' }}
                display={'flex'}
                justifyContent={'center'}
            >
                <ContentWithBackgrounImage
                    item1={`/assets/Alumna-4.png`}
                />
            </Grid>
        </Grid >
    )
}
