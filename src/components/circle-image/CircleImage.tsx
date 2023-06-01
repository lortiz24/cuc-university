import { useTheme, Grid, Box } from '@mui/material';
import MyGradiantBackground from './ColorBackground';
import { useGetOrigin } from '@/hooks/useGetOrigin';


interface Props {
    src: string,
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
export const CircleImage = ({
    src = '/assets/team-work-1-black_and_white.jpg',
    children,
    backgroundColor,
    borderRadiusLg = '17rem',
    borderRadiusMd = '10rem',
    borderRadiusSm = '50px',
    borderRadiusXs = '0rem',
    backgroundRepeat = 'no-repeat',
    backgroundSize = 'cover',
    backgroundPosition = '',
    minHeight = { xs: '400px', sm: '450px', md: '500px' },
    height = { xs: '400px', sm: '450px', md: '500px' }
}: Props) => {
    const { origin } = useGetOrigin()
    const theme = useTheme()

    return (
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
                zIndex: -10,
            }}
        >
            <MyGradiantBackground
                color={backgroundColor ? backgroundColor : theme.palette.secondary.main}
                borderRadiusMd={borderRadiusMd}
                borderRadiusSm={borderRadiusSm}
                borderRadiusXs={borderRadiusXs}
                borderRadiusLg={borderRadiusLg}
            />

            {children}

        </Box >


    )
}
