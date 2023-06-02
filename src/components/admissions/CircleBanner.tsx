import { useTheme, Grid, Box, Typography } from '@mui/material';
import { useGetOrigin } from '@/hooks/useGetOrigin';
import MyGradiantBackground from '../circle-image/ColorBackground';


interface Props {
    src: string;
    opacity?: string | number;
    whithouBoxBackground?: boolean,
    minHeight?: (string & any),
    height?: any;
    children: React.ReactNode;
    backgroundColor?: string
    borderRadiusLg?: string
    borderRadiusMd?: string
    borderRadiusSm?: string
    borderRadiusXs?: string
    backgroundRepeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space";
    backgroundSize?: "auto" | "contain" | "cover" | string,
    backgroundPosition?: "bottom" | "center" | "left" | "right" | "top" | string
}
export const CircleBanner = ({
    src = '/assets/team-work-1-black_and_white.jpg',
    children,
    opacity = 0.8,
    backgroundColor,
    borderRadiusLg = '17rem',
    borderRadiusMd = '10rem',
    borderRadiusSm = '50px',
    borderRadiusXs = '0rem',
    backgroundRepeat = 'no-repeat',
    backgroundSize = 'cover',
    backgroundPosition = '',
    minHeight = { xs: '400px', sm: '450px', md: '500px' },
    height,
    whithouBoxBackground = false
}: Props) => {
    const { origin } = useGetOrigin()
    const theme = useTheme()

    return (

        <Box
            sx={{
                borderRadius: { xs: borderRadiusXs, sm: borderRadiusSm, md: borderRadiusMd, lg: borderRadiusLg },
                position: 'relative',
                width: '100%',
                height: 450,
                backgroundImage: `url(${origin}${src})`,
                backgroundRepeat,
                backgroundSize,
                backgroundPosition,
                mixBlendMode: 'overlay',
                zIndex: -1,
                backgroundColor: backgroundColor ? backgroundColor : theme.palette.secondary.main,
            }}
        >
            {/*  translateY(-50%) */}
            <Typography
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: `calc(100% - 0.8em)`,
                    transform: 'translateX(-50%)',
                    color: 'transparent',
                    WebkitTextStroke: `2px ${theme.palette.primary.main}`,
                    fontSize: '8vw',
                }}
            >
                ADMISSIONS
            </Typography>
        </Box>

    )
}

{/* <Box
  sx={{
    borderRadius: { xs: borderRadiusXs, sm: borderRadiusSm, md: borderRadiusMd, lg: borderRadiusLg },
    position: 'relative',
    width: '100%',
    height,
    minHeight,
    backgroundImage: `url(${origin}${src})`,
    backgroundRepeat,
    backgroundSize,
    backgroundPosition,
    mixBlendMode: 'overlay',
    zIndex: -1,
    backgroundColor: backgroundColor ? backgroundColor : theme.palette.secondary.main,
  }}
>
  <Typography
    sx={{
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'transparent',
      WebkitTextStroke: `2px ${theme.palette.primary.main}`,
      fontSize: '8vw', // Tamaño de fuente relativo al ancho de la ventana
    }}
  >
    ADMISSIONS
  </Typography>
</Box> */}


/* 
<Box
sx={{
    borderRadius: { xs: borderRadiusXs, sm: borderRadiusSm, md: borderRadiusMd, lg: borderRadiusLg },
    position: 'relative',
    width: '100%',
    height,
    minHeight,
    backgroundImage: `url(${origin}${src})`,
    backgroundRepeat,
    backgroundSize,
    backgroundPosition,
    mixBlendMode: 'overlay',
    zIndex: -1,
    backgroundColor: backgroundColor ? backgroundColor : theme.palette.secondary.main,
}}
>
<Grid
    container
    direction="column"
    justifyContent="flex-end"
    alignItems="center"
    marginTop={10}
    sx={{ height: '100%' }}
>
    <Grid item >
        <Typography
            sx={{
                paddingTop: 10,
                color: 'transparent',
                WebkitTextStroke: `2px ${theme.palette.primary.main}`,
                fontSize: '8vw',
            }}
        >
            ADMISSIONS
        </Typography>
    </Grid>
</Grid>
</Box> */