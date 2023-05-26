import { useTheme, Typography, Grid, Box } from '@mui/material';

interface IMyGradiantBackgroundProps {
    color: string,
    borderRadiusMd: string
    borderRadiusSm: string
    borderRadiusXs: string
}

const MyGradiantBackground = ({ color, borderRadiusMd, borderRadiusSm, borderRadiusXs }: IMyGradiantBackgroundProps) => {
    return (
        <Box
            sx={{
                borderRadius: { xs: borderRadiusXs, sm: borderRadiusSm, md: borderRadiusMd },
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: color,
                zIndex: -2,
                opacity: 0.8,
            }}
        />
    )
}


export default MyGradiantBackground
