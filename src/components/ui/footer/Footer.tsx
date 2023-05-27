import React from 'react'
import { Grid, useTheme, Typography } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'

export const Footer = () => {
  const { origin } = useGetOrigin()
  const theme = useTheme()
  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.secondary.main,
        minHeight: '27rem',
      }}
    >
      <Grid
        item
        lg={6}
        sx={{
          backgroundImage: `url(${origin}/assets/9744a3a642b478781df6cd9b3dde8724.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '80%',

        }}
      >

      </Grid>
      <Grid
        item
        lg={6}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        <Typography
          variant='h2'
          color={theme.palette.primary.main}
          fontWeight="bold"
          fontSize={{ xs: 35, xl: 40 }}
          marginBottom={{ xs: 2, xl: 4 }}
          textAlign={'end'}
        >With a primary emphasis on business education,</Typography>
        <Typography
          variant='body2'
          color={'#FFFFFF'}
          fontSize={{ xs: 20, sm: 27, md: 25 }}
          textAlign={'end'}
        >
          Stay up to date our news, blog posts, and announcements by subscribing to our Newsletter.
        </Typography>
      </Grid>
    </Grid >
  )
}
