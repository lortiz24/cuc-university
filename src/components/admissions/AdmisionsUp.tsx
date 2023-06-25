import React from 'react'
import { Grid, useTheme } from '@mui/material'
import { CircleBanner } from '../circle-banner/CircleBanner'
import { CircleBannerWithImage } from '../circle-banner/CircleBannerWithImage'
import { useTranslation } from 'react-i18next'

export const AdmisionsUp = () => {
    const {t} = useTranslation()

    return (
        <Grid container marginBottom={7}>
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
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                {/*  <CircleBanner
                    src={`/assets/Negro_con_Escudo.png`}
                    tittle='ADMISSIONS'
                    borderRadiusLg='400px'
                    borderRadiusMd='200px'
                    borderRadiusSm='200px' /> */}


                <CircleBannerWithImage
                    src={`/assets/Admission.png`}
                    tittle={t("admissions.title")}/>
            </Grid>

        </Grid >
    )
}
