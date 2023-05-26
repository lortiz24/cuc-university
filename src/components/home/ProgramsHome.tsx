import React from 'react'
import { Typography, Grid, Button, Box } from '@mui/material';

import { UndergraduatePrograms } from './UndergraduatePrograms';
import { GraduatePrograms } from './GraduatePrograms';





export const ProgramsHome = () => {
    return (
        <>
            <Grid container width={'100%'} >
                <Grid
                    item
                    minHeight={{ xs: '20rem', sm: '30rem', md: '40rem' }}
                    width={'100%'}>
                    <UndergraduatePrograms />
                </Grid>
                <Grid item width={'100%'}>
                    <GraduatePrograms />
                </Grid>
            </Grid>

        </>
    )
}
