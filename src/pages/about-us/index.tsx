import React from 'react'
import StatementOfPurpose from '@/components/about-us/StatementOfPurpose'
import { Grid } from '@mui/material';
import { MainLayout } from '@/components/layouts/MainLayout'
import { AboutUsSectionUp } from '@/components/about-us/AboutUsSectionUp';
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';
import { MisionAndVisionCircle } from '@/components/about-us/MisionAndVisionCircle';

const index = () => {
    return (
        <MainLayout title='About Us'>
            <ComponentWithPadding>
                <Grid container rowGap={3}>
                    <Grid item xs={12}>
                        <AboutUsSectionUp />
                    </Grid>
                </Grid>
            </ComponentWithPadding>

            <MisionAndVisionCircle />

            <ComponentWithPadding>
                <Grid container rowGap={3} marginTop={3}>
                    <Grid item xs={12}>
                        <StatementOfPurpose />
                    </Grid>
                </Grid>
            </ComponentWithPadding>
        </MainLayout>
    )
}

export default index