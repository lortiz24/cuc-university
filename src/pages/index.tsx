import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'
import { CircleImage } from '@/components/circle-image/CircleImage'
import { useTheme } from '@mui/material'
import { ProgramsHome } from '@/components/home/ProgramsHome'
import { CucUniversityHome } from '@/components/home/CucUniversityHome'
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding'
import { ComponentsWithNoPading } from '@/components/layouts/ComponentsWithNoPading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme()

  return (
    <>
      <MainLayout title='Cuc University'>

        <ComponentWithPadding>
          <CucUniversityHome />
          <CircleImage src={`/assets/team-working.jpg`} height='500px' />
        </ComponentWithPadding>

        <ComponentsWithNoPading>
          <ProgramsHome />
        </ComponentsWithNoPading>

      </MainLayout >
    </>
  )
}
