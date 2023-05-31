import React from 'react';
import { Grid, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';

interface CustomComponentProps {
  title: string;
  items: { date: string; description: string }[];
}

const CustomComponent: React.FC<CustomComponentProps> = ({ title, items }) => {
  return (
<Grid item xs={12} md={6} marginY={5}>
    <Typography
        variant="h4"
        color="primary"
        fontWeight="bold"
        align='center'
        paddingBottom={1}
        >
        {title}
      </Typography>
      <Box sx={{ border: 1, borderColor: 'primary.main', borderRadius: '40px', p: 1 }}>
        <List disablePadding>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" fontWeight="bold">
                      {item.date + ' '}
                    </Typography>
                    <Typography variant="body1" component="span" sx={{ marginLeft: '0.5rem' ,marginRight:'0.5rem'}}>
                      {' - '}
                    </Typography>
                    <Typography variant="body1" component="span">
                      { ' ' + item.description}
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
