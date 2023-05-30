import StatementOfPurpose from '@/components/about-us/StatementOfPurpose'
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Paper,
    Grid,
    Avatar,
  } from '@mui/material';
import { MainLayout } from '@/components/layouts/MainLayout'
import React from 'react'

const index = () => {
    return (
        <MainLayout title='About Us'>
            <Grid xs={12}>

            <StatementOfPurpose />
            </Grid>
           
        </MainLayout>
    )
}

export default index