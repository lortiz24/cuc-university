import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'
import { CircleImage } from '@/components/circle-image/CircleImage'
import { ProgramsHome } from '@/components/home/ProgramsHome'
import { CucUniversityHome } from '@/components/home/CucUniversityHome'
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding'
import { ComponentsWithNoPading } from '@/components/layouts/ComponentsWithNoPading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <MainLayout title='Cuc University'>

        <ComponentWithPadding>
          <CucUniversityHome />
          
        </ComponentWithPadding>

        <ComponentsWithNoPading>
          <ProgramsHome />
        </ComponentsWithNoPading>

      </MainLayout >
    </>
  )
}
