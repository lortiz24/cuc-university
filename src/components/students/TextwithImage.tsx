import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const TextWithImage = () => {
  const {t} = useTranslation()

  return (
    <Grid container columnSpacing={15} paddingX={{xs:6}}>
      <Grid
        item
        xs={12} lg={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h2'
          color={(theme) => theme.palette.primary.main}
          fontWeight="bold"
          marginX={{ xs: 4, md: 0 }}
          fontSize={{ xs: 30, sm: 60 }}
          textAlign='start'
        >
          {t("Students.title")}
        </Typography>
        <Typography
          lineHeight={2}
          variant='body2'
          marginX={{ xs: 4, md: 0 }}
          color={'#626970'}
          fontSize={{ xs: 13, sm: 24}}
        >
          {t("Students.textmain")}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={8} marginLeft={{ xs: 4, md: 0 }} marginRight={{ xs: 1.5, md: 0 }} sx={{ paddingTop: '0px', position: 'relative' }}>
       
        {/* <img
          src="/assets/grupoStudiantes2.png"
          alt="Students"
          style={{ width: '100%', height: 'auto', maxWidth: '1000px' }}
        /> */}
        <Image
          src="/assets/grupoStudiantes2.png"
          priority
          alt="Students"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%', height: 'auto', maxWidth: '1000px'
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TextWithImage;
