import { BannerProgramThanks } from '@/components/academic-programs/BannerProgramThanks';
import { ContentBannerThanks } from '@/components/academic-programs/ContentBannerThanks';
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';
import { MainLayout } from '@/components/layouts/MainLayout';
import { graduatePrograms, underGraduatePrograms } from '@/data';
import { ProgramItem } from '@/interfaces';
import { getProgramByTitlePath } from '@/services/program.service';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'



interface Props {
  program: ProgramItem;
}


const index: NextPage<Props> = ({ program }) => {
  return (
    <MainLayout title={program.title} description={program.description} image={program.publicImg} height100vh>

      <BannerProgramThanks program={program} >
        <ContentBannerThanks publicImg={program.publicImg} title={program.titleComplete} />
      </BannerProgramThanks>
    </MainLayout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const programsPath = [...underGraduatePrograms, ...graduatePrograms].map((program, index) => `${program.path.replaceAll('/', '')}`);
  return {
    paths: programsPath.map(path => ({
      params: { tittle: path }
    })),
    fallback: false
  }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { tittle } = params as { tittle: string };
  const program = getProgramByTitlePath(tittle);

  if (!program) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }


  return {
    props: {
      program
    },
    // revalidate: 86400,
  }
}



export default index