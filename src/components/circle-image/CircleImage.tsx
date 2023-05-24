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
                    zIndex: -200
                }} />
            <MyGradiantBackground color={theme.palette.secondary.main} borderRadius='40rem' />

            <Grid
            padding={{xs:2,md:8}}
                container
                spacing={2}
                >
                <Grid item xs={6} md={8}>
                    
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography>xs=6 md=4</Typography>
                </Grid>
                
            </Grid>
        </div>


    )
}
