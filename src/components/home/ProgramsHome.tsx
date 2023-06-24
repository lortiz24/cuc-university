import React from 'react'
import { Grid } from '@mui/material';
import { UndergraduatePrograms } from './UndergraduatePrograms';
import { GraduatePrograms } from './GraduatePrograms';
import { ProgramItem } from '@/interfaces/Programs.interface';
import { useTranslation } from 'react-i18next';


interface Props {
    graduatePrograms: ProgramItem[];
    underGraduatePrograms: ProgramItem[];
}


export const ProgramsHome = ({ graduatePrograms, underGraduatePrograms }: Props) => {
    return (
        <>
            <Grid container width={'100%'} >
                <Grid
                    item
                    minHeight={'40rem'}
                    width={'100%'}>
                    <UndergraduatePrograms underGraduatePrograms={underGraduatePrograms} />
                </Grid>
                <Grid item width={'100%'} >
                    <GraduatePrograms graduatePrograms={graduatePrograms} />
                </Grid>
            </Grid>

        </>
    )
}
