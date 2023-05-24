import { useTheme, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import MyGradiantBackground from './ColorBackground';


interface Props {
    src: string,
}
export const CircleImage = ({ src }: Props) => {
    const theme = useTheme()

    return (
        <div
            style={{ position: 'relative', width: '100%', height: 400 }}
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
                    height: '400px',
                    borderRadius: '40rem',
                    objectFit: 'cover',
                    objectPosition: 'right top',
                    zIndex: -999
                }} />
            <MyGradiantBackground color={theme.palette.secondary.main} borderRadius='40rem' />

            <div style={{
                zIndex: 4000,
                padding: 50,
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
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
                            fontSize={{ xs: 10, sm: 15 }}
                        >CUC Unisersity is dedicated to providing students with the essential knowledge and skils to thrive in the competitive global marketplace.</Typography>
                    </Grid>

                </Grid>
            </div>


        </div>


    )
}
