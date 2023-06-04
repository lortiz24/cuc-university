import { useTheme, Box, Typography, Grid } from '@mui/material';
import { useGetOrigin } from '@/hooks/useGetOrigin';
import MyGradiantBackground from '../circle-image/ColorBackground';


interface Props {
    bannerSrc: string;
    children: React.ReactNode
}
export const BannerProgram = ({ bannerSrc, children }: Props) => {
    const { origin } = useGetOrigin()
    const theme = useTheme()

    return (
        <Grid
            container
        >
            <Grid
                item
                xs={12}
                width={'100%'}
                sx={{ position: 'relative', zIndex: 1 }}>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${origin}${bannerSrc})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mixBlendMode: 'overlay',
                        zIndex: -1,
                        backgroundColor: theme.palette.background.paper,
                    }}
                >
                    <MyGradiantBackground
                        opacity={0.8}
                        color={theme.palette.background.paper}
                        borderRadiusMd={'0px'}
                        borderRadiusSm={'0px'}
                        borderRadiusXs={'0px'}
                        borderRadiusLg={'0px'}
                    />
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: { xs: '5rem', sm: '15rem' },
                            width: { xs: '100%', md: '40%' },
                            maxWidth: '700px',
                            height: '400px',
                            position: 'absolute',
                            top: `calc(100% - 1.3em)`,
                            transform: { xs: '', md: 'translateX(10%)' },
                            color: 'transparent',
                            WebkitTextStroke: `2px ${theme.palette.primary.main}`,
                            fontSize: { xs: '14vw', md: '8vw' },

                        }}
                    >
                        <Grid
                            container
                            paddingX={{ xs: 10 }}
                        >
                            <Grid
                                display={'flex'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                item
                                xs={12}>
                                <Typography
                                    variant='caption'
                                    lineHeight={1.2}
                                    color='#FFFFFF'
                                    fontSize={{ xs: 25, sm: 38, xl: 40 }}
                                    marginBottom={{ xs: 1, md: 4 }}
                                    textAlign={'start'}
                                >
                                    Overview
                                </Typography>
                                <Typography variant="h4" color='#FFFFFF'>Overview</Typography>
                                <Typography variant="h4" color="#FFFFFF">Duration</Typography>
                                <Typography variant="h4" color="#FFFFFF">Credits</Typography>
                                <Typography variant="h4" color="#FFFFFF">Credits</Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    {children}
                </Box>
            </Grid>

        </Grid>
    )
}
