import React from 'react'
import { Grid, Typography, useTheme, Box, ListItem, ListItemIcon } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'
import Image from 'next/image';
export const MisionAndVision = () => {
  const theme = useTheme()

  return (
    <Grid
      container
      height={'100%'}
      display='flex'
      padding={{ xs: 5, lg: 10 }}
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
            alt="Corazón" width="20" height="20" />
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}>
          <Typography
            variant="h2"
            color={theme.palette.primary.main}
            fontWeight="bold"
            fontSize={{ xs: 35, xl: 40 }}
            textAlign="end"
          >
            Mission
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.secondary.main}
            fontSize={{ xs: 15, sm: 17, md: 19 }}
            textAlign="center"
          >
            At CUC University, our mission is to train an integral citizen under the principle of freedom of thought and ideological pluralism, with a high sense of responsibility in the permanent search for academics and research, using to achieve it the development of science, technique, technology and culture.
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
          <Image src="/assets/ojo.png" alt="Corazón" width="30" height="20" />

        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}>
          <Typography
            variant='h2'
            color={theme.palette.primary.main}
            fontWeight="bold"
            fontSize={{ xs: 35, xl: 40 }}
            marginBottom={{ xs: 2, xl: 4 }}
            textAlign={'end'}
          >Vision</Typography>
          <Typography
            variant='body2'
            color={theme.palette.secondary.main}
            fontSize={{ xs: 15, sm: 17, md: 19 }}
            textAlign={'center'}
          >CUC University was created with the desire to
            teach the next generation of skilled workers to
            face the challenges of the continually growing business world. Our vision is to be a leading university in the education of highly skilled citizens who are committed to society and the sustainable development of the country. We strive to be recognized for our academic
            excellence and our contribution to the advancement of science and technology.
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
          /* padding: {
            xs: '1rem 1rem',
            lg: '5rem 5rem',
            xl: '10rem 10rem',
          }, */
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
          <Image src="/assets/corazon.png" alt="Corazón" width="20" height="20" />

        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}>
          <Typography
            variant='h2'
            color={theme.palette.primary.main}
            fontWeight="bold"
            fontSize={{ xs: 35, xl: 40 }}
            marginBottom={{ xs: 2, xl: 4 }}
            textAlign={'end'}
          >Values</Typography>
          <Typography
            variant='body2'
            color={theme.palette.secondary.main}
            fontSize={{ xs: 15, sm: 17, md: 19 }}
            textAlign={'center'}
          >Our core values are excellence, responsibility integrity, and commitment to society, These values are reflected in everything we do, from teaching and research to interaction with our students, faculty, and administrative staff.
          </Typography>
        </Grid>

      </Grid>

    </Grid >
  )
}
