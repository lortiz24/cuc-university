import { MainLayout } from '@/components/layouts/MainLayout'
import FormComponent from '../../components/form-contact/FormContactUs';
import React from 'react'
import { Grid, Card, CardMedia } from '@mui/material';
import Image from 'next/image';
import { FormContact } from '@/interfaces';
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';

const index = () => {
  const handleSubmit = (formData: FormContact) => {
    console.log(formData);
  };
  const borderRadius = '3rem'
  return (
    <MainLayout title='Contact Us'>
      <ComponentWithPadding>
        <Grid container marginBottom={10} >
          <Grid xs={12} sm={12} md={12} lg={6} item >
            <FormComponent onSubmit={handleSubmit} />
          </Grid>


          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            marginY={{ xs: 4, lg: 0 }}
            justifyContent="center"
            alignItems="center"
            display={'flex'}
            paddingX={{ xs: 2 }}
          >
            <CardMedia
              sx={{
                borderRadius,
                width: '100%',
                maxWidth: '700px'
              }}
              component="img"
              image={'/assets/Maps_ubication.png'}
              alt="Map"
            />
            {/*  <Image
              src={'/assets/Maps_ubication.png'}
              alt='maps1'
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '490px',
                borderRadius: '3rem',
              }}
            /> */}
          </Grid>
        </Grid>
      </ComponentWithPadding>
    </MainLayout>
  )
}

export default index