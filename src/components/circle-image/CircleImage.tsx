import { useTheme, Typography, Grid, Box } from '@mui/material';
import Image from 'next/image';
import MyGradiantBackground from './ColorBackground';


interface Props {
    src: string,
    height: string,
}
export const CircleImage = ({ src, height = '500px' }: Props) => {
    const theme = useTheme()
    const borderRadius = '20rem'
    return (
        <div
            style={{ position: 'relative', width: '100%', height }}
        >
            <Image
                src={src}
                alt="Imagen"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    position: "absolute",
                    width: '100%',
                    height,
                    borderRadius,
                    objectFit: 'cover',
                    objectPosition: 'right -8rem',
                    zIndex: -3
                }} />
            <MyGradiantBackground color={theme.palette.secondary.main} borderRadius={borderRadius} />

            <Box
                sx={{
                    height: '500px',
                    paddingX: { xs: 2, sm: 10 },
                }}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Image
                                src={'/assets/mano.png'}
                                alt="Imagen"
                                width={300}
                                height={300}
                                style={{
                                    objectFit: 'cover',
                                    zIndex: 4
                                }} />
                        </div>

                    </Grid>
                    <Grid item xs={6} md={6} >
                        <Typography
                            variant='h2'
                            color={theme.palette.primary.main}
                            fontWeight="bold"
                            fontSize={{ xs: 20, sm: 35 }}
                            marginBottom={{ xs: 2, md: 4 }}
                        >With a primary emphasis on business education,</Typography>
                        <Typography
                            variant='body2'
                            color={'#FFFFFF'}
                            fontSize={{ xs: 20, sm: 17 }}
                        >CUC Unisersity is dedicated to providing students with the essential knowledge and skils to thrive in the competitive global marketplace.</Typography>
                    </Grid>

                </Grid>
            </Box>


        </div >


    )
}
