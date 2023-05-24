import { useGetOrigin } from '@/hooks/useGetOrigin';
import { Button, useTheme, Menu } from '@mui/material';
import Image from 'next/image';





export const CircleImage = () => {
    const theme = useTheme()
    const { origin } = useGetOrigin()
    const circleSyyle: React.CSSProperties = {
        borderRadius: '40rem',
        backgroundColor: theme.palette.secondary.main,
        color: '#ffffff',
        padding: '4px 15px'
    }


    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <div
                style={{
                    borderRadius: '40rem',
                    width: '100%',
                    backgroundImage: `url(${origin}/assets/team-working.jpg)`,
                    height: 400,
                }}
            />
            <div
                style={{
                    borderRadius: '40rem',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(128, 128, 128, 0.5)',
                    opacity: 0.5,
                }}
            ></div>
        </div>


    )
}
