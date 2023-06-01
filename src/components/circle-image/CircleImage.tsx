import { useTheme, Typography, Grid, Box } from '@mui/material';
import MyGradiantBackground from './ColorBackground';
import { useGetOrigin } from '@/hooks/useGetOrigin';


interface Props {
    src: string,
    height?: string,
    children: React.ReactNode
}
export const CircleImage = ({ src, height = '600px', children }: Props) => {
    const { origin } = useGetOrigin()
    const theme = useTheme()
    const borderRadiusLg = '17rem'
    const borderRadiusMd = '10rem'
    const borderRadiusSm = '50px'
    const borderRadiusXs = '0rem'
    return (
        <Box
            sx={{
                borderRadius: { xs: borderRadiusXs, sm: borderRadiusSm, md: borderRadiusMd, lg: borderRadiusLg },
                // borderRadius: 'calc(0 * (1vw / 400) + 17rem * (100vw / 400))',
                position: 'relative',
                width: '100%',
                height: { xs: '400px', sm: '450px', md: '500px' },
                backgroundImage: `url(${origin}/assets/team-work-1-black_and_white.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                zIndex: -10,
            }}
        >
            <MyGradiantBackground color={theme.palette.secondary.main} borderRadiusMd={borderRadiusMd} borderRadiusSm={borderRadiusSm} borderRadiusXs={borderRadiusXs} borderRadiusLg={borderRadiusLg} />

            {children}

        </Box >


    )
}
