import { Box } from '@mui/material'


interface Props {
    backgroundImage?: string;
    item1?: string;
    withBackgroundImage?: boolean;
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const ContentWithBackgrounImage = ({
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
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                backgroundImage: `url(${origin}${item1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom ',
                backgroundSize: 'contain',

            }} />
        </Box>

    )
}
