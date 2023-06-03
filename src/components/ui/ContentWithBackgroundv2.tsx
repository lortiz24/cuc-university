import { Box } from '@mui/material'
import Image from 'next/image'

interface Props {
    backgroundImage?: string;
    item1?: string;
    withBackgroundImage?: boolean;
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const ContentWithBackgroundv2 = ({
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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundImage: withBackgroundImage ? `url(${origin}${backgroundImage})` : '',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'contain',
        }}>
             <Box sx={{
                minHeight: '100%',
                minWidth: '100%',
                backgroundImage: `url(${origin}${item1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom ',
                backgroundSize: 'contain',
                // position: 'absolute',
                // bottom: '0',
                // marginBottom: '100px',

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