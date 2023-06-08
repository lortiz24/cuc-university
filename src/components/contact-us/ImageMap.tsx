import React, { useState } from 'react'
import { Grid, CardMedia, Skeleton } from '@mui/material';
import Image from 'next/image';

interface Props {
    borderRadius: string
}
export const ImageMap = ({ borderRadius }: Props) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    return (
        <Grid container
            width={'100%'}
        >
            <Grid
                item
                width={'100%'}
            >
                <CardMedia
                    onLoad={handleImageLoad}
                    sx={{
                        borderRadius,
                        width: '100%',
                        maxWidth: '550px'
                    }}
                    component="img"
                    image={'/assets/Maps_ubication.png'}
                    alt="Map"
                />
            </Grid>

            <Grid
                item
                width={'100%'}>
                {!imageLoaded && (
                    <Skeleton
                        variant='rectangular'
                        animation="wave"
                        width="100%"

                        sx={{ borderRadius: '2rem', maxWidth: '550px', height: { xs: 150, sm: 250, md: 400, lg: 500, xl: 550 } }} />
                )}
            </Grid>
        </Grid>
    )
}
