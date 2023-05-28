import { MainLayout } from '@/components/layouts/MainLayout'
import FormComponent from '../../components/FormContactUs';
import React from 'react'
import { Grid } from '@mui/material';
import Image from 'next/image';
import { FormContact } from '@/interfaces';
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';

const index = () => {
  const handleSubmit = (formData: FormContact) => {
    console.log(formData);
  };
  return (
    <MainLayout title='Contact Us'>
      <ComponentWithPadding>
        <Grid container >
          <Grid xs={12} sm={12} md={12} lg={6} item >
            <FormComponent onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} marginY={4} justifyContent="center" alignItems="center" display={'flex'}>
            <Image
              src={'/assets/Maps_ubication.png'}
              alt='aluma1'
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '100%',
                borderRadius: '3rem',
              }}
            />
          </Grid>
        </Grid>
      </ComponentWithPadding>
    </MainLayout>
  )
}

export default index