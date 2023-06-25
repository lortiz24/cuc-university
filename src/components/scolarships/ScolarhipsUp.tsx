import React from 'react'
import { Grid, } from '@mui/material'
import { CircleBanner } from '../circle-banner/CircleBanner'
import { CircleBannerWithImage } from '../circle-banner/CircleBannerWithImage'
import { useTranslation } from 'react-i18next'


export const ScolarhipsUp = () => {
    const { t } = useTranslation()

    return (
        <Grid container>
            <Grid
                item xs={12}
                minHeight={'auto'}
                width={'100%'}
                marginBottom={15}
                sx={{
                    zIndex: 1,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <CircleBannerWithImage
                    src={`/assets/scholarship.png`}
                    tittle={t("scholarships.title")} 
                    fontSize={{ xs: '12vw', sm: '13vw', md: '8vw' }}
                    />
            </Grid>
        </Grid >
    )
}
