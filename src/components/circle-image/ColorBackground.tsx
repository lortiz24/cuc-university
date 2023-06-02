import { Box } from '@mui/material';

interface IMyGradiantBackgroundProps {
    color: string,
    borderRadiusMd?: string
    borderRadiusSm?: string
    borderRadiusXs?: string
    borderRadiusLg?: string
    opacity?: string | number
}

const MyGradiantBackground = ({ color, borderRadiusMd = '0px', borderRadiusSm = '0px', borderRadiusXs = '0px', borderRadiusLg = '0px', opacity = 0.8 }: IMyGradiantBackgroundProps) => {
    return (
        <Box
            sx={{
                borderRadius: { xs: borderRadiusXs, sm: borderRadiusSm, md: borderRadiusMd, lg: borderRadiusLg },
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: color,
                zIndex: -2,
                opacity,
            }}
        />
    )
}


export default MyGradiantBackground
