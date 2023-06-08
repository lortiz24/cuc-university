import { MainLayout } from '@/components/layouts/MainLayout'
import React from 'react'
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';
import { Grid } from '@mui/material';
import CustomComponent from '@/components/students/CustomComponent';
import TextwithImage from '@/components/students/TextwithImage';
import { itemsFall, itemsSpring } from '@/data/students'




const index = () => {
    return (
        <MainLayout title='Students' height100vh>
            <ComponentWithPadding>
                <Grid container spacing={2} marginBottom={{ xs: 0, sm: 4, md: 6, lg: 10, xl: 20 }}>
                    <TextwithImage />
                    <CustomComponent title="FALL 2022" items={itemsFall} />
                    <CustomComponent title="SPRING 2023" items={itemsSpring} />
                </Grid>
            </ComponentWithPadding>
        </MainLayout>
    )
}

export default index