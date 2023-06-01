import React from 'react'
import StatementOfPurpose from '@/components/about-us/StatementOfPurpose'
import { Grid } from '@mui/material';
import { MainLayout } from '@/components/layouts/MainLayout'
import { MisionAndVision } from '@/components/about-us/MisionAndVision';

const index = () => {
    return (
        <MainLayout title='About Us'>
            <Grid container>
                <Grid item xs={12}>
                    <MisionAndVision />
                </Grid>
                <Grid item xs={12}>
                    <StatementOfPurpose />
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default index