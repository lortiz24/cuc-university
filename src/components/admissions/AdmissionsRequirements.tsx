import React from 'react'
import { Box, Grid, List, Typography, useTheme } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'
import { MisionAndVision } from '../about-us/MisionAndVision'
import { AdmissionBackground } from './AdmissionBackground'
import { TextWithIcon } from '../about-us/TextWithIcon'
import { useTranslation } from 'react-i18next'

export const AdmissionsRequirements = () => {
    const {t} = useTranslation()
    const { origin } = useGetOrigin()
    const theme = useTheme()
    return (
        <Grid
            container
            padding={{ xs: 2, sm: 3, lg: 4 }}
        >
            <Grid
                item
                xs={12}
                width={'100%'}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                <Typography
                    variant="h2"
                    color={theme.palette.secondary.main}
                    fontWeight="bold"
                    fontSize={{ xs: 35, md: 60  }}
                    textAlign="center"
                    paddingBottom={5}
                >
                    {t("admissions.subtitle")}
                </Typography>

            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                width={'100%'}
                paddingX={{xs: 2, sm: 3, lg: 13}}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                <Typography
                    variant="h2"
                    color={theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize={{ xs: 35, xl: 50 }}
                    textAlign="center"
                    paddingBottom={2}
                >
                    {t("admissions.masterpro")}
                </Typography>
                <List>
                    <TextWithIcon  >
                        {t("admissions.masterpro0")}
                    </TextWithIcon>
                    <TextWithIcon  >
                        {t("admissions.masterpro1")}
                    </TextWithIcon>
                    <TextWithIcon  >
                        {t("admissions.masterpro2")}
                    </TextWithIcon>
                    <TextWithIcon  >
                        {t("admissions.masterpro3")}
                    </TextWithIcon>
                    <TextWithIcon  >
                        {t("admissions.masterpro4")}
                    </TextWithIcon>
                    <TextWithIcon  >
                        {t("admissions.masterpro5")}
                    </TextWithIcon>
                    <TextWithIcon  >
                        {t("admissions.masterpro6")}
                    </TextWithIcon>
                </List>

            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                paddingX={{xs: 2, sm: 3, lg: 13}}
                width={'100%'}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                <Typography
                    variant="h2"
                    color={theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize={{ xs: 35, xl: 50 }}
                    textAlign="center"
                    paddingBottom={2}
                >
                    {t("admissions.undergrapro")}
                </Typography>
                <List>
                    <TextWithIcon  >
                        {t("admissions.undergrapro0")}
                    </TextWithIcon>
                    <TextWithIcon  >
                        {t("admissions.undergrapro1")}
                    </TextWithIcon>
                    <TextWithIcon  >
                        {t("admissions.undergrapro2")}
                    </TextWithIcon>
                    <TextWithIcon  >
                        {t("admissions.undergrapro3")}
                    </TextWithIcon>
                </List>
            </Grid>

        </Grid>
    )
}
