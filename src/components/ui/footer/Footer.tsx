import React from 'react'
import { Grid, useTheme, Typography, Box } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'
import { SocialNetworks } from './SocialNetworks'
import { MenuFooter } from '../menu/MenuFooter'
import { EmailForm } from './EmailForm'

export const Footer = () => {
  const { origin } = useGetOrigin()
  const theme = useTheme()

  const minHeight = '27rem'

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
      {/* <Box
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: `calc(100%)`,
          transform: 'translateX(-50%)',
          color: 'transparent',
          WebkitTextStroke: `2px ${theme.palette.primary.main}`,
          fontSize: { xs: '14vw', md: '8vw' },
          minHeight: '100%',
          minWidth: '800px',
          backgroundImage: `url(${origin}/assets/Alumna-4-recorte.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          backgroundSize: 'contain',
        }}
      /> */}
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
        >
          <Box sx={{
            height: '100%',
            width: { xs: '100%', lg: 320 },
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
              >Join our Newsletter</Typography>
              <Typography
                variant='body2'
                color={'#FFFFFF'}
                fontSize={18}
                textAlign={'start'}
              >
                Stay up to date our news, blog post, and announcements by subscribing to our Newsletter.
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
