import { useTheme, Box, Typography } from '@mui/material';
import { useGetOrigin } from '@/hooks/useGetOrigin';
import Image from 'next/image';


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
export const CircleBannerWithImage = ({
    src = '/assets/team-work-1-black_and_white.jpg',
    tittle,
    fontSize = { xs: '16vw', sm: '14vw', md: '8vw' }
}: Props) => {
    const theme = useTheme()

    return (

        <Box sx={{ position: 'relative', width: '100%' }}>
            <Image
                src={src}
                alt="Students"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '1600px',
                    maxHeight: '700PX',
                }}
            />

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