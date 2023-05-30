import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
} from '@mui/material';
import Image from 'next/image';

interface SplitPageProps {
  listItems?: string[];
  paragraph?: string;
  image?: string;
}

const SplitPage: React.FC<SplitPageProps> = ({ listItems = ["Provide undergraduate and master's programs with an environment that focuses on all dimensions of learning - knowledge, understanding, skills, behaviors, values, and attitudes.",
  "Create and disseminate knowledge on important business issues through research, innovation, and rewarding learning experiences.", "Serve society through the exchange of ideas and practices.",
  "Practice ethical leadership by managing our resources effectively and efficiently.",
  "Foster a culture of excellence, inclusion, collaboration, and respect for diverse ideas"],
  paragraph = "CUC University is a private institution organized as a for profit corporation under the laws of the State of Florida. It is licensed under the Commission for Independent Education Florida Department of Education, to provide post-secondary education and has authority to grant degrees under the laws of the State of Florida.",
  image = "/assets/9744a3a642b478781df6cd9b3dde8724.png" }) => {
  return (

    <Grid container spacing={0} display={'flex'} justifyContent={'center'}>
      <Grid item xs={12} sm={12} md={6}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant='h2'
            color={(theme) => theme.palette.secondary.main}
            fontWeight="bold"
            fontSize={{ xs: 25, sm: 40 }}
            marginBottom={{ xs: 1, md: 1 }}
            textAlign={'start'}
          >
            Statement of Purpose
          </Typography>
          <Grid xs={9} sx={{ marginBottom: { xs: 3, md: 10 } }}>
            <List>
              {listItems.map((item, index) => (
                <ListItem key={index} >
                  <ListItemIcon sx={{ minWidth: 4 }}>
                    <img
                      src="/assets/start.png"
                      alt="Start"
                      style={{
                        width: '50px',
                        height: '50px',
                      }}
                    />
                  </ListItemIcon>
                  <Typography variant="body2" lineHeight={2} gutterBottom color={(theme) => theme.palette.secondary.main}>
                {item}
              </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} display={"flex"} flexDirection="column" alignItems={"center"}>
        <Box display={"flex"} flexDirection="column" alignItems={"center"}>

          <Typography
            variant='h2'
            color={(theme) => theme.palette.secondary.main}
            fontWeight="bold"
            fontSize={{ xs: 25, sm: 40 }}
            marginBottom={{ xs: 2, md: 3 }}
            textAlign={'start'}
          >
            Accreditation
          </Typography>
            <Grid xs={8}>
              <Typography variant="body2" lineHeight={2} gutterBottom color={(theme) => theme.palette.secondary.main}>
                {paragraph}
              </Typography>
            </Grid>
            <img
              src={image}
              alt="Logo_Florida"
              style={{
                marginTop: '5rem',
                marginBottom: '2rem',
                width: '100%',
                maxWidth: '383px', // Establece un ancho máximo para evitar que la imagen se haga demasiado pequeña
                height: 'auto', // Ajusta l

              }}
            />
        </Box>

      </Grid>
    </Grid>
  );
};

export default SplitPage;
