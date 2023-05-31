import React from 'react'
import { Grid, useTheme, Typography, Box } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'
import { SocialNetworks } from './SocialNetworks'
import { NavbarUi } from '../Navbar2'
import { Menu } from '../menu/Menu'
import { MenuFooter } from '../menu/MenuFooter'

export const Footer = () => {
  const { origin } = useGetOrigin()
  const theme = useTheme()

  const minHeight = '27rem'

  return (
    <Box sx={{
      backgroundImage: `url(${origin}/assets/Grupo-175.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: { xs: 'top 15rem right 5rem', sm: 'right' },
      backgroundSize: 'contain',
      minHeight,
      backgroundColor: theme.palette.secondary.main,
      zIndex: -10
    }}>
      <Grid
        container
        sx={{ minHeight }}
        rowGap={4}
      >
        <Grid
          item
          xs={12}
          md={4}
          padding={{ xs: 0 }}
          minHeight={200}
        /* sx={{
          backgroundColor: 'red',
        }} */
        >
          <Box sx={{
            height: '100%',
            width: '100%',
            backgroundImage: `url(${origin}/assets/9744a3a642b478781df6cd9b3dde8724.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center ',
            backgroundSize: '60%',
          }} />

        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          padding={{ xs: 1 }}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
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
          <Typography
            variant='h2'
            color={theme.palette.primary.main}
            fontWeight="bold"
            fontSize={{ xs: 22, md: 22 }}
            marginBottom={{ xs: 2, xl: 4 }}
            textAlign={'start'}
          >Join our Newsletter</Typography>
          <Typography
            variant='body2'
            color={'#FFFFFF'}
            fontSize={{ xs: 20, sm: 20, md: 22 }}
            textAlign={'start'}
          >
            Stay up to date our news, blog post, and announcements by subscribing to our Newsletter.
          </Typography>
          <SocialNetworks />
        </Grid>
      </Grid >
    </Box>
  )
}
