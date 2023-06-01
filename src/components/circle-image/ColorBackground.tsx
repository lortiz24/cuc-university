import { Box } from '@mui/material';

interface IMyGradiantBackgroundProps {
    color: string,
    borderRadiusMd?: string
    borderRadiusSm?: string
    borderRadiusXs?: string
    borderRadiusLg?: string
}

const MyGradiantBackground = ({ color, borderRadiusMd = '0px', borderRadiusSm = '0px', borderRadiusXs = '0px', borderRadiusLg = '0px' }: IMyGradiantBackgroundProps) => {
    return (
        <Box
            sx={{
                borderRadius: { xs: borderRadiusXs, sm: borderRadiusSm, md: borderRadiusMd, lg: borderRadiusLg },
                // borderRadius: 'calc(0 * (1vw / 400) + 17rem * (100vw / 400))',
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
