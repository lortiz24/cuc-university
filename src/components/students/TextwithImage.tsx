import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const TextWithImage = () => {
  return (
    <Grid container spacing={5}>
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
          fontSize={{ xs: 25, sm: 40 }}
          textAlign='start'
        >
          Students
        </Typography>
        <Typography
          lineHeight={2}
          variant='body2'
          marginX={{ xs: 4, md: 0 }}
          color={'#626970'}
          fontSize={{ xs: 13, sm: 14, lg: 18 }}
        >
          This will be the page where students find relevant information and tools including log in to Campus Café, Canva, Online Payments Library Resources, University Catalog and Academic Calendar.
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
          alt="Students"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            width: '100%', height: 'auto', maxWidth: '1000px'
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TextWithImage;
