import { useState } from 'react';
import { useTheme, Box, Typography, Skeleton, Grid } from '@mui/material';
import { useGetOrigin } from '@/hooks/useGetOrigin';
import Image from 'next/image';


interface Props {
    src: string;
    backgroundColor?: string
    borderRadiusLg?: string
    borderRadiusMd?: string
    borderRadiusSm?: string
    borderRadiusXs?: string
    backgroundSize?: string,
    tittle?: string,
    fontSize?: any
}
export const CircleBannerWithImage = ({
    src = '/assets/team-work-1-black_and_white.jpg',
    tittle,
    fontSize = { xs: '14vw', sm: '13vw', md: '8vw' }
}: Props) => {
    const theme = useTheme()
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    return (

        <Box
            sx={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Grid container
                width={'100%'}
            >
                <Grid
                    item
                    width={'100%'}
                >
                    <Image
                        src={src}
                        alt="Students"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '1600px',
                            maxHeight: '700px',
                        }}
                        onLoad={handleImageLoad}
                    />
                </Grid>
                <Grid
                    item
                    width={'100%'}
                >
                    {/* {!imageLoaded && (
                        <Skeleton
                            variant='rectangular'
                            animation="wave"
                            width="100%"
                            sx={{ borderRadius: '20rem', height: { xs: 150, sm: 250, md: 400, lg: 500, xl: 600 } }} />
                    )} */}
                </Grid>
            </Grid>


            <Typography
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: `calc(100% - 0.8em)`,
                    transform: 'translateX(-50%)',
                    color: 'transparent',
                    WebkitTextStroke: {
                        xs: `0.9px ${theme.palette.primary.main}`,
                        sm: `2px ${theme.palette.primary.main}`,
                    },
                    fontSize,
                }}
            >
                {tittle}
            </Typography>
        </Box>

    )
}