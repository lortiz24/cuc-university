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
            minHeight={{ xs: 400, md: 700 }}
        >
            <Grid
                item
                xs={12}
                md={5}
                display={'flex'}
                justifyContent={'center'}
                flexDirection='column'
                alignItems={'center'}
                paddingX={{ xs: 10 }}
            /* sx={{
                backgroundColor: 'red'
            }} */
            >
                <Typography
                    variant='h2'
                    color={(theme) => theme.palette.primary.main}
                    lineHeight={1}
                    fontWeight="bold"
                    fontSize={{ xs: 25, sm: 42, xl: 40 }}
                    marginBottom={{ xs: 1, sm: 10, md: 4 }}
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
                xs={0}
                md={7}
                display={'flex'}
                justifyContent={'center'}
                flexDirection='column'
                alignItems={'center'}
                paddingX={{ xs: 10 }}
            >
                <Box sx={{
                    borderRadius: '100rem',
                    minHeight: '70%',
                    width: '100%',
                    maxWidth:'1000px',
                    backgroundImage: `url(${origin}${publicImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    top: 0,
                    display: { xs: 'none', md: "block" },
                    zIndex: 10,

                }} />

            </Grid>
        </Grid>
    )
}
