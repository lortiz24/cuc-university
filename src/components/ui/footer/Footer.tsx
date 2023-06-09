import React from 'react'
import { Grid, useTheme, Typography, Box } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'
import { SocialNetworks } from './SocialNetworks'
import { MenuFooter } from '../menu/MenuFooter'
import { EmailForm } from './EmailForm'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { origin } = useGetOrigin()
  const theme = useTheme()
  const minHeight = '27rem'
  const { t } = useTranslation()

  return (
    <Box sx={{
      width: '100%',
      position: 'relative',
      backgroundImage: `url(${origin}/assets/Grupo-175.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: { xs: 'top 15rem right 5rem', sm: 'right' },
      backgroundSize: 'contain',
      minHeight,
      backgroundColor: theme.palette.secondary.main,
      // zIndex: -10,
    }}>

      <Grid
        container
        sx={{ minHeight }}
        paddingX={{ xs: 1, sm: 3, md: 2 }}
        rowGap={4}
        paddingBottom={{ xs: 5, sm: 5 }}
      >
        <Grid
          item
          xs={12}
          md={4}
          padding={{ xs: 5, }}
          minHeight={200}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{
            // height: '100%',
            // width: { xs: '100%', lg: 320 },
            width: '241px',
            height: '140px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundImage: `url(${origin}/assets/WhiteLogo.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center ',
            backgroundSize: 'contain',

          }} />


        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          padding={{ xs: 1 }}
          paddingX={{ xs: 4, sm: 3, md: 4, lg: 5 }}
        >
          <MenuFooter colorLink='#FFFFFF' />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          paddingX={{ xs: 2, sm: 3, md: 4, lg: 5 }}
        >
          <Grid container columnGap={2} rowGap={2} marginTop={2}>
            <Grid item xs={12}>
              <Typography
                variant='h2'
                color={theme.palette.primary.main}
                fontWeight="bold"
                fontSize={{ xs: 22, md: 22 }}
                textAlign={'start'}
              >{t('footer.title')}</Typography>
              <Typography
                variant='body2'
                color={'#FFFFFF'}
                fontSize={18}
                textAlign={'start'}
              >
                {t('footer.body')}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <EmailForm />
            </Grid>
            <Grid item xs={12}>
              <SocialNetworks />
            </Grid>
          </Grid>

        </Grid>
      </Grid >
    </Box >
  )
}
