import { MainLayout } from '@/components/layouts/MainLayout'
import React from 'react'
import ContactImage from '../../components/form-contact/ComponentWithImage';
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';
import { Grid } from '@mui/material';
import CustomComponent from '@/components/students/CustomComponent';


const index = () => {
    const itemsFall = [
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

    const itemsSpring = [
        { date: 'January 1, 2023', description: 'New Years Day' },
        { date: 'January 16, 2023', description: 'Martin Luther King' },
        { date: 'January 23, 2023', description: 'Spring Semester begins' },
        { date: 'January 23-27, 2023', description: 'ADD/DROP Period for Spring 2023 semester' },
        { date: 'April 10-16, 2023', description: 'Spring Break (no classes)' },
        { date: 'April 20 -May 9, 2023', description: 'Regular registration for Summer and Fall 2023 semesters' },
        { date: 'May 12-16, 2023', description: 'Late Registration for Summer and Fall 2023 semesters' },
        { date: 'May 12, 2023', description: 'Spring Semester ends' },
      ];

    return (
        <MainLayout title='Students'>
            <ComponentWithPadding>
                <Grid container spacing={2}>
                    <CustomComponent title="FALL 2022" items={itemsFall} />
                    <CustomComponent title="SPRING 2023" items={itemsSpring} />

                    {/* Agrega más componentes personalizados o contenido adicional aquí */}
                </Grid>
                {/* <ContactImage /> */}
            </ComponentWithPadding>
        </MainLayout>
    )
}

export default index