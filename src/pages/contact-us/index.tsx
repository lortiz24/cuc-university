import React from 'react'
import { MainLayout } from '@/components/layouts/MainLayout'
import FormComponent from '../../components/form-contact/FormContactUs';
import { Grid } from '@mui/material';
import { FormContact } from '@/interfaces';
import { ComponentWithPadding } from '@/components/layouts/ComponentWithPadding';
import { ImageMap } from '@/components/contact-us/ImageMap';
import { useTranslation } from 'react-i18next';

const index = () => {
  const {t} = useTranslation()

  const handleSubmit = (formData: FormContact) => {
    console.log(formData);
  };

  const borderRadius = '3rem'

  return (
    <MainLayout title='Contact Us'>
      <ComponentWithPadding>
        <Grid container marginBottom={10} >
          <Grid xs={12} sm={12} md={12} lg={7} paddingX={{ xs: 10, sm: 15, md: 0, lg: 10, xl: 25 }} item >
            <FormComponent onSubmit={handleSubmit} title={t("contactus.title")} />
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