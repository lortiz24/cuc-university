import { useTheme, Box, Typography, Grid } from '@mui/material';
import { useGetOrigin } from '@/hooks/useGetOrigin';
import MyGradiantBackground from '../circle-image/ColorBackground';



interface Props {
    src: string;
    children: React.ReactNode;
    backgroundColor?: string
    borderRadiusLg?: string
    borderRadiusMd?: string
    borderRadiusSm?: string
    borderRadiusXs?: string
    backgroundSize?: string,
    tittle?: string
}



export const AdmissionBackground = ({
    src = '/assets/team-work-1-black_and_white.jpg',
    backgroundSize = 'cover',
    tittle,
    children
}: Props) => {
    const { origin } = useGetOrigin()
    const theme = useTheme()


    return (
        <Grid
            container
        >
            <Grid
                item
                xs={12}
                width={'100%'}
                sx={{ position: 'relative', zIndex: 1 }}>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${origin}${src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize,
                        backgroundPosition: 'center',
                        mixBlendMode: 'overlay',
                        zIndex: -1,
                        backgroundColor: theme.palette.background.paper,
                    }}
                >
                    <MyGradiantBackground
                        opacity={0.8}
                        color={theme.palette.background.paper}
                        borderRadiusMd={'0px'}
                        borderRadiusSm={'0px'}
                        borderRadiusXs={'0px'}
                        borderRadiusLg={'0px'}
                    />
                    {children}
                </Box>
            </Grid>

        </Grid>
    )
}
