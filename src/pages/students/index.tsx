import { MainLayout } from '@/components/layouts/MainLayout'
import React from 'react'
import ContactImage from '../../components/form-contact/ComponentWithImage';
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';
import { Grid } from '@mui/material';
import CustomComponent from '@/components/students/CustomComponent';


const index = () => {
    const items = [
        { date: 'August 29, 2022', description: 'Fall semesters begin' },
        { date: 'August 29- September 6, 2022', description: 'ADD/DROP Period for Fall 2022 semester' },
        { date: 'November 10-December 1, 2022 ', description: 'Early Registration and Payment for Spring 2023' },
        { date: 'Semester November 11, 2022', description: 'Veterans Day' },
        { date: 'December 2-19, 2022', description: 'Regular Registration' },
        { date: 'December 16, 2022', description: 'Fall Semester ends' },
        { date: 'November 24, 2022', description: 'Thanksgiving Day' },
        { date: 'November 24-28, 2022', description: 'Thanksgiving break (no classes)' },
        { date: 'November 25, 2022', description: 'Black Friday' },
        { date: 'December 26, 2022', description: 'Christmas Day' },
      ];
    return (
        <MainLayout title='Students'>
            <ComponentWithPadding>
                <Grid container spacing={2}>
                    <CustomComponent title="Eventos" items={items} />
                    {/* Agrega más componentes personalizados o contenido adicional aquí */}
                </Grid>
                {/* <ContactImage /> */}
            </ComponentWithPadding>
        </MainLayout>
    )
}

export default index