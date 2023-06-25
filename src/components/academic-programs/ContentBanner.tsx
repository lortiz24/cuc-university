import { useGetOrigin } from '@/hooks/useGetOrigin'
import { TitleProgram } from '@/interfaces';
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

interface Props {
    publicImg: string;
    title: TitleProgram;
}

export const ContentBanner = ({ publicImg, title }: Props) => {
    const { origin } = useGetOrigin()
    const { t } = useTranslation()
    return (
        <Grid
            container
            minHeight={{ xs: 400, md: 900 }}
        >
            <Grid
                item
                xs={12}
                md={5}
                display={'flex'}
                justifyContent={'center'}
                flexDirection='column'
                alignItems={'center'}
                maxHeight={{ xs: 400, md: 800 }}
                // paddingLeft={{ xl: 15 }}
                paddingX={{ xs: 10, md: 0 }}
            // sx={{ backgroundColor: 'red' }}
            >
                <Typography
                    variant="h2"
                    color={(theme) => theme.palette.primary.main}
                    lineHeight={1}
                    fontWeight="bold"
                    fontSize={{ xs: 40, sm: 55, xl: 60 }}
                    marginBottom={{ xs: 1, sm: 10, md: 4 }}
                    textAlign={{ xs: 'center', md: "right" }} // Alinear el texto a la derecha
                >
                    {t(title.type)}{" "}
                    <Typography
                        variant="caption"
                        lineHeight={1.2}
                        color={(theme) => theme.palette.secondary.main}
                        fontSize={{ xs: 30, sm: 40, xl: 60 }}
                        marginBottom={{ xs: 1, md: 4 }}
                        textAlign={{ xs: 'center', md: "right" }}
                    >
                        {t(title.specialty)}
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
                    maxWidth: '940px',
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
