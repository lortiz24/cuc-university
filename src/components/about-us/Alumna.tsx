import { Box } from '@mui/material'
import Image from 'next/image'

interface Props {
    backgroundImage?: string;
    item1?: string;
    withBackgroundImage?: boolean;
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Alumna = ({
    backgroundImage = `/assets/figura1.png`,
    item1 = `/assets/Grupo-alumnos.png`,
    withBackgroundImage = true
}: Props) => {

    return (
        <Box sx={{
            position: 'relative',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: withBackgroundImage ? `url(${origin}${backgroundImage})` : '',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'contain',
        }}>
            <Box sx={{
                minHeight: '80%',
                minWidth: '80%',
                backgroundImage: `url(${origin}${item1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'bottom',
                position: 'absolute',
                bottom: 0,
                // backgroundColor:'yellow',
            }} />
            <Box sx={{
                borderRadius: 80,
                // backgroundColor: 'yellow',
                minHeight: '70%',
                width: '100%',
                maxWidth:'860px',
                backgroundImage: `url(${origin}${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                top: 0,
                zIndex: -10

            }} />
            {/*  <Image
                src={item1}
                alt='alumna'
                width={0}
                sizes="100vw"
                height={0}
                style={{
                    minWidth: 250,
                    minHeight: 250,
                    maxHeight: "100%",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                }}
            /> */}
        </Box>

    )
}
