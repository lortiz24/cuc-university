import { BannerProgramThanks } from "@/components/academic-programs/BannerProgramThanks";
import { ContentBannerThanks } from "@/components/academic-programs/ContentBannerThanks";
import { MainLayout } from "@/components/layouts/MainLayout";
import { useGetOrigin } from "@/hooks/useGetOrigin";
import { ProgramItem, TitleProgram } from "@/interfaces";
import { Box, Grid, Typography } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
    program: ProgramItem;
}

 const index: NextPage<Props> = ({ program ={
    id: 'e15f1e9f1e651f59ef196564ef45e',
    pdf: {
        name: 'Associates of Science in International Plan.pdf',
        ruta: '/files/pdf/Associates-of-Science-in-International-Plan.pdf'
    },
    publicImg: '/assets/team-work-2.jpg',
    contactImage: '/assets/Alumno1-2.png',
    path: '/associates-science-international-business-administration',
    title: 'menu.academic-programs.aosiba',
    titleComplete: {
        type: 'programs.aosiba.title-complete.type',
        specialty: 'programs.aosiba.title-complete.specialty'
    },
    overView: {
        duration: 'programs.aosiba.overview.duration.content',
        credits: 'programs.aosiba.overview.credits.content',
        modality: 'programs.aosiba.overview.modality.content',
        language: 'programs.aosiba.overview.language.content',
    },
    description: 'programs.aosiba.description.body',
    objective: 'programs.aosiba.objective.body'
}})  => {

  return (
    <MainLayout title={program.title} description={program.description} image={program.publicImg} >
            <BannerProgramThanks program={program} >
                <ContentBannerThanks publicImg={program.publicImg} title={program.titleComplete} />
            </BannerProgramThanks>

        </MainLayout>
  );
};
export default index
