import React from 'react';
import { Grid, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface CustomComponentProps {
  title: string;
  items: { date: string; description: string }[];
}

const CustomComponent: React.FC<CustomComponentProps> = ({ title, items }) => {
  const {t} = useTranslation()

  return (
    <Grid
      item
      xs={12}
      md={6}
      marginY={5}>
      <Typography
        variant="h4"
        color="primary"
        fontWeight="bold"
        align='center'
        paddingBottom={1}
      >
        {title}
      </Typography>
      <Box sx={{
        border: 1,
        borderColor: '#E0CA83',
        borderRadius: '40px',
        py: 2,
        px: 1,
        minHeight: { sm: '0px', md: '950px', lg: '550px' },
        '@media (min-width: 1900px)': {
          minHeight:'460px'
        },
      }}>
        <List disablePadding>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ py: 0.3 }}>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" fontWeight="bold" fontSize={{ xs: 15, sm: 20 }}>
                      {t(item.date) + ' '}
                    </Typography>
                    <Typography variant="body1" component="span" sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                      {' - '}
                    </Typography>
                    <Typography variant="body1" component="span" fontSize={{ xs: 15, sm: 20 }}>
                      {' ' + t(item.description)}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  );
};

export default CustomComponent;
