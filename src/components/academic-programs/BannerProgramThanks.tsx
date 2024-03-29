import { useTheme, Box, Grid, Typography } from '@mui/material';
import { useGetOrigin } from '@/hooks/useGetOrigin';
import MyGradiantBackground from '../circle-image/ColorBackground';
import { ProgramItem } from '@/interfaces';
import { ContentOverviewThanks } from './ContentOverviewThanks';

interface Props {
    children: React.ReactNode
    program: ProgramItem
}


export const BannerProgramThanks = ({ children, program }: Props) => {
    const { origin } = useGetOrigin()
    const theme = useTheme()

    return (
        <Grid
            container
            height={{ xs: 700, md: 900 }}
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
                        height: '70%',
                        backgroundImage: `url(${origin}${program.publicImgBlackAndWhite})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 20%',
                        zIndex: -1,
                        backgroundColor: theme.palette.background.paper,
                    }}
                >
                    <MyGradiantBackground
                        opacity={1}
                        color={theme.palette.background.paper}
                        borderRadiusMd={'0px'}
                        borderRadiusSm={'0px'}
                        borderRadiusXs={'0px'}
                        borderRadiusLg={'0px'}
                        gradiente={
                            {
                                colorLeft: '#FFFFFF',
                                colorRight: '#FFFFFF',
                                opacityLeft: 0.5,
                                opacityRight: 1
                            }
                        }
                    />

                    <Box
                        sx={{
                            backgroundColor: theme.palette.secondary.main,
                            borderRadius: { xs: '5rem', sm: '15rem' },
                            width: { xs: '100%', md: '60%', lg: '64%' },
                            height: '290px',
                            maxWidth: '1500px',
                            position: 'absolute',
                            top: { xs: 'calc(100% - 10px)', sm: 'calc(100%)' },
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'transparent',
                            fontSize: { xs: '14vw', md: '8vw' },
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundImage: `url(${origin}/assets/Grupo-175.png)`,
                            backgroundPosition: { xs: 'top 15rem left 5rem', sm: 'top 1px left -40px' },
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '550px'
                        }}
                    >
                        <ContentOverviewThanks program={program} />
                    </Box>

                    <Box sx={{ height: '100%' }}>{children}</Box>
                </Box>
            </Grid>

        </Grid>
    )
}
