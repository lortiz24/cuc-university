import { useTheme, Box, Grid, Typography } from '@mui/material';
import { useGetOrigin } from '@/hooks/useGetOrigin';
import MyGradiantBackground from '../circle-image/ColorBackground';
import { ProgramItem } from '@/interfaces';
import { ContentOverview } from './ContentOverview';

interface Props {
    children: React.ReactNode
    program: ProgramItem
}


export const BannerProgram = ({ children, program }: Props) => {
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
                        backgroundImage: `url(${origin}${program.publicImg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mixBlendMode: 'overlay',
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
                                opacityLeft: 0.8,
                                opacityRight: 1
                            }
                        }
                    />
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: { xs: '5rem', sm: '15rem' },
                            width: { xs: '100%', sm: '100%', md: '60%', lg: '50%' },
                            maxWidth: '740px',
                            position: 'absolute',
                            top: { xs: 'calc(100% - 100px)', sm: 'calc(100% - 160px)' },
                            transform: { xs: '', md: 'translateX(10%)' },
                            color: 'transparent',
                            fontSize: { xs: '14vw', md: '8vw' },
                            display: 'flex',
                            justifyContent: 'start',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <ContentOverview program={program} />
                    </Box>

                    <Box>{children}</Box>
                </Box>
            </Grid>

        </Grid>
    )
}
