import React, { useEffect, useState } from 'react'
import { useGetOrigin } from '@/hooks/useGetOrigin'
import { useGetBreakpoints } from '@/styles/useGetBreakpoints'
import { Box } from '@mui/material'
import Image from 'next/image'

export const AlumsImage = () => {

    const { origin } = useGetOrigin()
    const { xs, sm, md, lg, xl } = useGetBreakpoints()
    const [marginLeft, setMarginLeft] = useState('20rem')
    useEffect(() => {
        if (xs) setMarginLeft('0rem')
    }, [xs, sm, md, lg, xl])

    return (
        <Box sx={{
            position: 'relative', // Establece el posicionamiento relativo en el contenedor principal
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',

        }}>
            <Box sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                backgroundImage: `url(${origin}/assets/Alumna-1-1.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                backgroundSize: 'contain',

            }} />
            <Box sx={{
                position: 'absolute', // Establece el posicionamiento absoluto en el primer Box interno
                top: 0, // Coloca el primer Box en la parte superior
                left: 0, // Coloca el primer Box a la izquierda
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                backgroundImage: `url(${origin}/assets/Alumno1-1.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                backgroundSize: 'contain',

            }} />
            {/* <Image
                src={'/assets/Alumna-1-1.png'}
                alt='alumna-with-cellphone'
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    maxHeight:'100%',
                    position: 'absolute',
                    width: '460px',
                    zIndex: 1,
                }}
            />

            <Image
                src={'/assets/Alumno1-1.png'}
                alt='Alumno-with-notebook'
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    position: 'absolute',
                    width: '450px',
                    marginLeft,
                    zIndex: 2
                }}
            /> */}
        </Box>

    )
}
