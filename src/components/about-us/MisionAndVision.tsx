import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
export const MisionAndVision = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Grid
      container
      height={'100%'}
      display='flex'
      rowGap={{ xs: 3, lg: 0 }}
      columnSpacing={10}
      padding={{ xs: 5, lg: 7 }}
    >

      <Grid
        item
        xs={12}
        lg={4}
      >
        <Grid
          item
          marginBottom={{ xs: 2 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}>
          <Image
            src="/assets/location.png"
            alt="Corazón" width="50" height="50" />
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}
          marginBottom={{ xs: 5, md: 0 }}
        >
          <Typography
            variant="h2"
            color={theme.palette.primary.main}
            fontWeight="bold"
            fontSize={{ xs: 35, xl: 40 }}
            textAlign="end"
            paddingBottom={2}
          >
            {t('aboutUs.circle-section.mission-title')}
          </Typography>
          <Typography
            variant="body2"
            lineHeight={1.8}
            fontSize={{ xs: 15, sm: 20 }}
            textAlign="center"
          >
            {t('aboutUs.circle-section.mission-body')}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          marginBottom={{ xs: 2 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}>
          <Image src="/assets/ojo.png" alt="Corazón" width="60" height="40" />

        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}
          marginBottom={{ xs: 5, md: 0 }}
        >
          <Typography
            variant='h2'
            color={theme.palette.primary.main}
            fontWeight="bold"
            fontSize={{ xs: 35, xl: 40 }}
            textAlign={'end'}
            paddingBottom={2}
          >{t('aboutUs.circle-section.vision-title')}</Typography>
          <Typography
            variant='body2'
            marginBottom={{ xs: 2, xl: 4 }}
            fontSize={{ xs: 15, sm: 20 }}
            textAlign={'center'}
            lineHeight={1.8}
          >{t('aboutUs.circle-section.vision-body')}
          </Typography>
        </Grid>

      </Grid>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',

        }}
      >

        <Grid
          item
          marginBottom={{ xs: 2 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}>
          <Image src="/assets/corazon.png" alt="Corazón" width="50" height="48" />

        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}
          marginBottom={{ xs: 5, md: 0 }}
        >
          <Typography
            variant='h2'
            color={theme.palette.primary.main}
            fontWeight="bold"
            fontSize={{ xs: 35, xl: 40 }}
            textAlign={'end'}
            paddingBottom={2}
          >{t('aboutUs.circle-section.values-title')}</Typography>
          <Typography
            variant='body2'
            marginBottom={{ xs: 2, xl: 4 }}
            fontSize={{ xs: 15, sm: 20 }}
            textAlign={'center'}
            lineHeight={1.8}
          >{t('aboutUs.circle-section.vision-body')}
          </Typography>
        </Grid>

      </Grid>

    </Grid >
  )
}
