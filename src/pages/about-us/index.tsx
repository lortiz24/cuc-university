import React from 'react'
import StatementOfPurpose from '@/components/about-us/StatementOfPurpose'
import { Grid } from '@mui/material';
import { MainLayout } from '@/components/layouts/MainLayout'
import { AboutUsSectionUp } from '@/components/about-us/AboutUsSectionUp';

const index = () => {
    return (
        <MainLayout title='About Us'>
            <Grid container>
                <Grid item xs={12}>
                    <AboutUsSectionUp />
                </Grid>
                <Grid item xs={12}>
                    <StatementOfPurpose />
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default index