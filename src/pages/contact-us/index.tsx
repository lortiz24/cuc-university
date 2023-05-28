import { MainLayout } from '@/components/layouts/MainLayout'
import FormComponent from '../../components/FormContactUs';
import { FormData } from '../../components/FormContactUs';
import React from 'react'
import { Grid } from '@mui/material';
import Image from 'next/image';

const index = () => {
  const handleSubmit = (formData: FormData) => {
    // Realizar la acción necesaria con los datos del formulario
    console.log(formData);
  };
  return (
    <MainLayout title='Contact Us'>
      <Grid container >
        <Grid  xs={12} sm={12} md={12} lg={6} item >
          <FormComponent onSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} paddingTop={8} justifyContent="center"  alignItems="center">
        <Image
                src={'/assets/Maps_ubication.png'}
                alt='aluma1'
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: '490px',
                    borderRadius: '3rem',
                }}
            />
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default index