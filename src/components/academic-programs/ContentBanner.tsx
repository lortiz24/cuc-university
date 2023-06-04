import { useGetOrigin } from '@/hooks/useGetOrigin'
import { TitleProgram } from '@/interfaces';
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
    publicImg: string;
    title: TitleProgram;
}

export const ContentBanner = ({ publicImg, title }: Props) => {
    const { origin } = useGetOrigin()
    return (
        <Grid
            container
            minHeight={700}
        >
            <Grid
                item
                xs={6}
                display={'flex'}
                justifyContent={'center'}
                flexDirection='column'
                alignItems={'center'}
            /* sx={{
                backgroundColor: 'red'
            }} */
            >
                <Typography
                    variant='h2'
                    color={(theme) => theme.palette.primary.main}
                    lineHeight={0.3}
                    fontWeight="bold"
                    fontSize={{ xs: 25, sm: 42, xl: 40 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'start'}
                >
                    {title.type} <Typography
                        variant='caption'
                        lineHeight={1.2}
                        color={(theme) => theme.palette.secondary.main}
                        fontSize={{ xs: 25, sm: 38, xl: 40 }}
                        marginBottom={{ xs: 1, md: 4 }}
                        textAlign={'start'}
                    >
                        {title.specialty}
                    </Typography>
                </Typography>

            </Grid>
            <Grid
                item
                xs={6}
            >
                <Box sx={{
                    borderRadius: 100,
                    minHeight: '70%',
                    minWidth: '100%',
                    backgroundImage: `url(${origin}${publicImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    top: 0,
                    zIndex: 10,
                    
                }} />
                {/*  <Box sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundImage: `url(${origin}${'/assets/City-1.jpg'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    backgroundSize: 'contain',
                }}>

                </Box> */}
            </Grid>
        </Grid>
    )
}
