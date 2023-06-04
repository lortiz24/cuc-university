import { GetStaticProps, NextPage, GetStaticPaths } from 'next';


import { MainLayout } from '@/components/layouts/MainLayout';
import { graduatePrograms, underGraduatePrograms } from '@/data';
import { ProgramItem } from '@/interfaces';
import { getProgramByTitlePath } from '@/services/program.service';
import { BannerProgram } from '@/components/academic-programs/BannerProgram';
import { ContentBanner } from '@/components/academic-programs/ContentBanner';


interface Props {
    program: ProgramItem;
}


const ProgramPage: NextPage<Props> = ({ program }) => {



    return (
        <MainLayout title={program.title}>
            <BannerProgram bannerSrc={program.imgBanner} >
                <ContentBanner publicImg={program.publicImg} title={program.titleComplete} />
            </BannerProgram>
        </MainLayout>
    )
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const programsPath = [...underGraduatePrograms, ...graduatePrograms].map((program, index) => `${program.path.replaceAll('/', '')}`);
    return {
        paths: programsPath.map(path => ({
            params: { tittle: path }
        })),
        fallback: false
        //  fallback: 'blocking'
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





export default ProgramPage;
