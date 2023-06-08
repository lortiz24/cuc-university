import { MainLayout } from '@/components/layouts/MainLayout'
import { ProgramsHome } from '@/components/home/ProgramsHome'
import { CucUniversityHome } from '@/components/home/CucUniversityHome'
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding'
import { ComponentsWithNoPading } from '@/components/layouts/ComponentsWithNoPading'
import { GetStaticProps, NextPage } from 'next'
import { ProgramItem } from '@/interfaces/Programs.interface'
import { graduatePrograms, underGraduatePrograms } from '@/data/programs'
import { Grid } from '@mui/material';
import { CircleImage } from '@/components/circle-image/CircleImage'
import { ContenCircleImage } from '@/components/home/ContenCircleImage'


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
        <Grid container paddingX={{ xs: 2, sm: 5, lg: 10, xl: 15 }}>
          <Grid item xs={12} minHeight={'auto'} width={'100%'} sx={{ zIndex: 1, position: 'relative', top: -35, }}>
            <CircleImage
              src={`/assets/team-work-1-black_and_white.png`}
              minHeight={{ xs: '400px', md: '400px', xl: '490px' }}
            >
              <ContenCircleImage />
            </CircleImage>
          </Grid>
        </Grid>
        <ProgramsHome graduatePrograms={graduatePrograms} underGraduatePrograms={underGraduatePrograms} />

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
