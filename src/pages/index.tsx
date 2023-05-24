import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'
import { CircleImage } from '@/components/circle-image/CircleImage'
import { Grid, Typography, useTheme, Box } from '@mui/material'
import { AlumsImage } from '@/components/home/AlumsImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme()
  return (
    <MainLayout title='Cuc University'>
      <Box
        sx={{
          height: '500px',
          paddingX: { xs: 1, sm: 20 },
        }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Grid container>
          <Grid item xs={12} md={4} >
            <Typography
              variant='h2'
              color={theme.palette.primary.main}
              fontWeight="bold"
              fontSize={{ xs: 20, sm: 35 }}
              marginBottom={{ xs: 1, md: 2 }}
            >CUC University</Typography>
            <Typography
              variant='body2'
              color={(theme) => theme.palette.secondary.main}
              fontSize={{ xs: 10, sm: 15 }}
            >a distinguished American institution located in Miami, Florida, delivers a versatile hybrid educational approach that combines online and on-campus learning opportunities in english and spanish</Typography>
          </Grid>
          <Grid item xs={12} md={8} >
            <AlumsImage />
          </Grid>
        </Grid>
      </Box>
      <CircleImage src={`/assets/team-working.jpg`} height='500px' />

    </MainLayout>
  )
}
