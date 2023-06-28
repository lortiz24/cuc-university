import React from 'react';
import {
  Box,
  Typography,
  Grid,
  List,
} from '@mui/material';
import { TextWithIcon } from './TextWithIcon';
import { useTranslation } from 'react-i18next';

const SplitPage = () => {
  const { t } = useTranslation()
  return (

    <Grid container display={'flex'} justifyContent={'center'} >
      <Grid item xs={12} sm={12} md={6} >
        <Box display="flex" flexDirection="column" alignItems="center" >
          <Typography
            variant='h2'
            color={(theme) => theme.palette.secondary.main}
            fontWeight="bold"
            fontSize={{ xs: 25, sm: 50 }}
            marginBottom={{ xs: 1, md: 1 }}
            textAlign={'start'}
          >
            {t('aboutUs.statement.title')}
          </Typography>
          <Grid sx={{ marginBottom: { xs: 3, md: 10 } }}>
            <List>

              <TextWithIcon  >
                {t('aboutUs.statement.one')}
              </TextWithIcon>
              <TextWithIcon  >
                {t('aboutUs.statement.two')}
              </TextWithIcon>
              <TextWithIcon  >
                {t('aboutUs.statement.three')}
              </TextWithIcon>
              <TextWithIcon  >
                {t('aboutUs.statement.four')}
              </TextWithIcon>
              <TextWithIcon  >
                {t('aboutUs.statement.five')}
              </TextWithIcon>
            </List>

          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} display={"flex"} flexDirection="column" alignItems={"center"} >
        <Box display={"flex"} flexDirection="column" alignItems={"center"}>

          <Typography
            variant='h2'
            color={(theme) => theme.palette.secondary.main}
            fontWeight="bold"
            fontSize={{ xs: 25, sm: 50 }}
            marginBottom={{ xs: 2, md: 3 }}
            textAlign={'start'}
          >
            {t('aboutUs.accreditation.title')}
          </Typography>
          <Grid xs={8}>
            <Typography variant="body2" lineHeight={2} gutterBottom textAlign={'justify'} fontSize={{ xs: 15, sm: 20 }} color={'#626970'}>
              {t('aboutUs.accreditation.body')}
            </Typography>
          </Grid>
          <img
            src={'/assets/9744a3a642b478781df6cd9b3dde8724.png'}
            alt="Logo_Florida"
            style={{
              marginTop: '5rem',
              marginBottom: '2rem',
              width: '100%',
              maxWidth: '383px',
              height: 'auto',

            }}
          />
        </Box>

      </Grid>
    </Grid>
  );
};

export default SplitPage;
