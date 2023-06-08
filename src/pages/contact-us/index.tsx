import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts/MainLayout'
import FormComponent from '../../components/form-contact/FormContactUs';
import { Grid, Card, CardMedia, Skeleton } from '@mui/material';
import Image from 'next/image';
import { FormContact } from '@/interfaces';
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';
import { ImageMap } from '@/components/contact-us/ImageMap';

const index = () => {
  const handleSubmit = (formData: FormContact) => {
    console.log(formData);
  };

  const borderRadius = '3rem'
  
  return (
    <MainLayout title='Contact Us'>
      <ComponentWithPadding>
        <Grid container marginBottom={10} >
          <Grid xs={12} sm={12} md={12} lg={7} paddingX={{ xs: 10, sm: 15, md: 0, lg: 10, xl: 25 }} item >
            <FormComponent onSubmit={handleSubmit} />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            marginY={{ xs: 4, lg: 0 }}
            justifyContent="center"
            alignItems="center"
            display={'flex'}
            paddingX={{ xs: 2 }}
          >

            <ImageMap borderRadius={borderRadius} />
          </Grid>
        </Grid>
      </ComponentWithPadding>
    </MainLayout>
  )
}

export default index