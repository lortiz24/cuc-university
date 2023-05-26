import { useTheme, Typography, Grid, Box } from '@mui/material';
import Image from 'next/image';
import MyGradiantBackground from './ColorBackground';
import { useGetOrigin } from '@/hooks/useGetOrigin';


interface Props {
    src: string,
    height?: string,
}
export const CircleImage = ({ src, height = '600px' }: Props) => {
    const { origin } = useGetOrigin()
    const theme = useTheme()
    const borderRadiusMd = '20rem'
    const borderRadiusSm = '15rem'
    const borderRadiusXs = '5rem'
    return (
        <Box
            sx={{
                borderRadius: { xs: borderRadiusXs, sm: borderRadiusSm, md: borderRadiusMd },
                position: 'relative',
                width: '100%',
                height: { xs: '400px', sm: '550px', md: '600px' },
                backgroundImage: `url(${origin}/assets/team-work-1-black_and_white.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                zIndex: -10
            }}
        >
            <MyGradiantBackground color={theme.palette.secondary.main} borderRadiusMd={borderRadiusMd} borderRadiusSm={borderRadiusSm} borderRadiusXs={borderRadiusXs} />

            <Grid
                container
                height={'100%'}

            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    display={{ xs: 'none', lg: 'block' }}
                    sx={{
                        backgroundImage: `url(${origin}/assets/mano-start.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center', // Modificado para alinear la imagen en la parte superior
                        backgroundSize: '80%',
                        height: '100%',
                        width: '100%',
                    }}
                >

                </Grid>
                <Grid
                    item
                    xs={12} lg={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: {
                            xs: '1rem 1rem',
                            lg: '5rem 5rem',
                            xl: '10rem 10rem',
                        },
                    }}
                >
                    <Typography
                        variant='h2'
                        color={theme.palette.primary.main}
                        fontWeight="bold"
                        fontSize={{ xs: 35, xl: 40 }}
                        marginBottom={{ xs: 2, xl: 4 }}
                        textAlign={'end'}
                    >With a primary emphasis on business education,</Typography>
                    <Typography
                        variant='body2'
                        color={'#FFFFFF'}
                        fontSize={{ xs: 20, sm: 27, md: 25 }}
                        textAlign={'end'}
                    >CUC Unisersity is dedicated to providing students with the essential knowledge and skils to thrive in the competitive global marketplace.
                    </Typography>
                </Grid>

            </Grid>


        </Box >


    )
}
