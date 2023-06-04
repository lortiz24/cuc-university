import { Box } from '@mui/material';

interface IMyGradiantBackgroundProps {
    color: string,
    borderRadiusMd?: string
    borderRadiusSm?: string
    borderRadiusXs?: string
    borderRadiusLg?: string
    opacity?: string | number,
    gradiente?: {
        colorLeft: string;
        opacityLeft?: number;
        colorRight: string;
        opacityRight?: number;
    }
}

export const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
}

const MyGradiantBackground = ({ color, borderRadiusMd = '0px', borderRadiusSm = '0px', borderRadiusXs = '0px', borderRadiusLg = '0px', opacity = 0.8, gradiente }: IMyGradiantBackgroundProps) => {
    return (
        <Box
            sx={{
                borderRadius: { xs: borderRadiusXs, sm: borderRadiusSm, md: borderRadiusMd, lg: borderRadiusLg },
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: !gradiente ? color : '',
                backgroundImage: gradiente ?
                    `linear-gradient(0deg, rgba(${hexToRgb(gradiente.colorLeft)},${gradiente.opacityLeft}) 0%, rgba(${hexToRgb(gradiente.colorRight)},${gradiente.opacityRight}) 100%)` : '',
                zIndex: -2,
                opacity,
            }}
        />
    )
}


export default MyGradiantBackground
