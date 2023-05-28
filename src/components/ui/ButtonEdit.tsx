import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const CustomButton = styled(Button)(({ theme }) => ({
    color: 'white',
    borderRadius: 30,
    padding: '2px',
    fontSize: '1rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#667481',
    },
    '&:hover:not(:active)': {
      backgroundColor: '#667481',
    },
  }));