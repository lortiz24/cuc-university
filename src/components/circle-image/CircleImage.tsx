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
                minHeight: height,
                backgroundImage: `url(${origin}/assets/team-work-1-black_and_white.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                zIndex: -10
            }}
        >
            <MyGradiantBackground color={theme.palette.secondary.main} borderRadiusMd={borderRadiusMd} borderRadiusSm={borderRadiusSm} borderRadiusXs={borderRadiusXs} />

            <Box
                sx={{
                    height: '500px',
                }}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
            >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                        <div style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                        }}>
                            <Image
                                src={'/assets/mano-start.png'}
                                alt="Imagen"
                                width={300}
                                height={300}
                                style={{
                                    objectFit: 'cover',
                                    zIndex: 4
                                }} />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12} md={6}
                        display={'flex'}
                        justifyContent={'center'}
                        flexDirection={'column'}
                        sx={{
                            padding: '10rem 10rem',

                        }}>
                        <Typography
                            variant='h2'
                            color={theme.palette.primary.main}
                            fontWeight="bold"
                            fontSize={{ xs: 20, sm: 40 }}
                            marginBottom={{ xs: 2, md: 4 }}
                            textAlign={'end'}
                        >With a primary emphasis on business education,</Typography>
                        <Typography
                            variant='body2'
                            color={'#FFFFFF'}
                            fontSize={{ xs: 20, sm: 17 }}
                        >CUC Unisersity is dedicated to providing students with the essential knowledge and skils to thrive in the competitive global marketplace.</Typography>
                    </Grid>

                </Grid>
            </Box>


        </Box >


    )
}
