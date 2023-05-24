import { useTheme } from '@mui/material';
import Image from 'next/image';



interface Props {
    src: string,
}

export const CircleImage = ({ src }: Props) => {
    const theme = useTheme()

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <Image
                src={src}
                alt="Imagen"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '40rem',
                    objectFit: 'cover',
                    objectPosition: 'right top'
                }} />
            <div
                style={{
                    borderRadius: '40rem',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: theme.palette.secondary.main,
                    opacity: 0.8,
                }}
            ></div>
        </div>


    )
}
