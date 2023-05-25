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
      <div>
        <Grid container>
          <Grid item xs={12} md={4} >
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography
                variant='h2'
                color={theme.palette.primary.main}
                fontWeight="bold"
                fontSize={{ xs: 20, sm: 35 }}
                marginBottom={{ xs: 1, md: 2 }}
                style={{ textAlign: 'center' }}
              >
                CUC University
              </Typography>
              <Typography
                variant='body2'
                color={(theme) => theme.palette.secondary.main}
                fontSize={{ xs: 10, sm: 16 }}
                style={{ textAlign: 'center' }}
              >
                A distinguished American institution located in Miami, Florida, delivers a versatile hybrid educational approach that combines online and on-campus learning opportunities in English and Spanish.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={8} height={'40rem'}>
            <AlumsImage />
          </Grid>
        </Grid>
        <CircleImage src={`/assets/team-working.jpg`} height='500px' />
        <div style={{
          minHeight: '500px',
          background: ' #f2f2f2',
          marginBottom: '20px',
          padding: '20px',
        }}>
          {/* Contenido de la tercera sección */}
        </div>
      </div>
    </MainLayout >
  )
}
