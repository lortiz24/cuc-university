import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'
import { CircleImage } from '@/components/circle-image/CircleImage'
import { Grid, Typography, useTheme, Box } from '@mui/material'
import { AlumsImage } from '@/components/home/AlumsImage'
import { ProgramsHome } from '@/components/home/ProgramsHome'
import { CucUniversityHome } from '@/components/home/CucUniversityHome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme()

  return (
    <MainLayout title='Cuc University'>
      <div>
        <CucUniversityHome />
        <CircleImage src={`/assets/team-working.jpg`} height='500px' />
        <ProgramsHome />
      </div>
    </MainLayout >
  )
}
