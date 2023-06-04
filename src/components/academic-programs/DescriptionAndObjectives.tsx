import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'



interface Props {
    description: string;
    objective: string
}
export const DescriptionAndObjectives = ({ description, objective }: Props) => {
    const theme = useTheme()



    return (
        <Grid
            container
            minHeight={1000}
        >
            <Grid
                item
                xs={12}
                md={6}
                marginTop={{ xs: 45, md: 40 }}
                paddingX={{ xs: 4, sm: 15, md: 4, xl: 20 }}
            >
                <Typography
                    lineHeight={1.2}
                    color={theme.palette.primary.main}
                    fontSize={{ xs: 25, sm: 38, xl: 40 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'start'}
                >
                    Description
                </Typography>
                <Typography
                    variant='caption'
                    lineHeight={1.6}
                    color={(theme) => theme.palette.secondary.main}
                    fontSize={{ xs: 20, sm: 20, xl: 20 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'start'}
                >
                    {description}
                </Typography>

            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'end'}
                paddingX={{ xs: 4, sm: 15, md: 4, xl: 20 }}
            // sx={{ backgroundColor: 'red' }}
            >
                <Typography
                    lineHeight={1.2}
                    color={theme.palette.primary.main}
                    fontSize={{ xs: 25, sm: 38, xl: 40 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'end'}
                >
                    Objective
                </Typography>
                <Typography
                    variant='caption'
                    lineHeight={1.2}
                    color={(theme) => theme.palette.secondary.main}
                    fontSize={{ xs: 20, sm: 20, xl: 20 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'end'}
                >
                    {objective}
                </Typography>
               

            </Grid>
        </Grid >
    )
}
