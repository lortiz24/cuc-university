import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'
import { CircleImage } from '@/components/circle-image/CircleImage'
import { ProgramsHome } from '@/components/home/ProgramsHome'
import { CucUniversityHome } from '@/components/home/CucUniversityHome'
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding'
import { ComponentsWithNoPading } from '@/components/layouts/ComponentsWithNoPading'
import { GetStaticProps, NextPage } from 'next'
import { ProgramItem } from '@/interfaces/Programs.interface'
import { graduatePrograms, underGraduatePrograms } from '@/data/programs'



interface Props {
  graduatePrograms: ProgramItem[];
  underGraduatePrograms: ProgramItem[];
}


const HomePage: NextPage<Props> = ({ graduatePrograms, underGraduatePrograms }) => {
  return (
    <>
      <MainLayout title='Cuc University'>

        <ComponentWithPadding>
          <CucUniversityHome />
        </ComponentWithPadding>

        <ComponentsWithNoPading>
          <ProgramsHome graduatePrograms={graduatePrograms} underGraduatePrograms={underGraduatePrograms} />
        </ComponentsWithNoPading>

      </MainLayout >
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  return {
    props: {
      underGraduatePrograms,
      graduatePrograms
    }
  }
}


export default HomePage
