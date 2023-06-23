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
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.517520919966!2d-80.33274949999999!3d25.819486899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bbda014fb739%3A0xacd2799b75c34252!2s8350%20NW%2052nd%20Terrace%20Suite%20301%2C%20Doral%2C%20FL%2033166!5e0!3m2!1ses-419!2sus!4v1687486204192!5m2!1ses-419!2sus"
                    width="700"
                    height="450"
                    loading="lazy"
                    style={{
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                        maxWidth: '100%',
                        margin: '0 auto',
                    }}
                />
              
            </Grid>

           
        </Grid>
    )
}
