import { MainLayout } from '@/components/layouts/MainLayout'
import React from 'react'
import ContactImage from '../../components/form-contact/ComponentWithImage';
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';
import { Grid } from '@mui/material';
import CustomComponent from '@/components/students/CustomComponent';


const index = () => {
    const items = [
        { date: 'August 29, 2022', description: 'Fall semesters begin' },
        { date: 'September 15, 2022', description: 'Orientation day' },
        { date: 'October 3, 2022', description: 'Deadline for course registration' },
        { date: 'November 8, 2022', description: 'Guest speaker event' },
        { date: 'December 10, 2022', description: 'Final exams' },
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