import { useTheme, Box, Typography } from '@mui/material';
import { useGetOrigin } from '@/hooks/useGetOrigin';


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
export const CircleBanner = ({
    src = '/assets/team-work-1-black_and_white.jpg',
    borderRadiusLg = '17rem',
    borderRadiusMd = '10rem',
    borderRadiusSm = '50px',
    borderRadiusXs = '0rem',
    backgroundSize = 'cover',
    tittle,
    fontSize = { xs: '16vw',sm:'14vw', md: '8vw' }
}: Props) => {
    const { origin } = useGetOrigin()
    const theme = useTheme()

    return (

        <Box
            sx={{
                borderRadius: { xs: borderRadiusXs, sm: borderRadiusSm, md: borderRadiusMd, lg: borderRadiusLg },
                position: 'relative',
                width: '100%',
                maxWidth: '2000px',
                height: '100%',
                backgroundImage: `url(${origin}${src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize,
                mixBlendMode: 'overlay',
                zIndex: -1,
                backgroundPosition: 'center'
            }}
        >
            <Typography
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: `calc(100% - 0.8em)`,
                    transform: 'translateX(-50%)',
                    color: 'transparent',
                    WebkitTextStroke: { xs: `0.9px ${theme.palette.primary.main}`, sm: `2px ${theme.palette.primary.main}` },
                    fontSize,

                }}
            >
                {tittle}
            </Typography>
        </Box>

    )
}