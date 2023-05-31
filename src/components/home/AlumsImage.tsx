import React, { useEffect, useState } from 'react'
import { useGetOrigin } from '@/hooks/useGetOrigin'
import { useGetBreakpoints } from '@/hooks/useGetBreakpoints'
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
            backgroundImage: `url(${origin}/assets/figura1.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'contain',
        }}>

            <Box sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                backgroundImage: `url(${origin}/assets/Grupo-alumnos.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom ',
                backgroundSize: 'contain',

            }} />
           {/*  <Box sx={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                backgroundImage: `url(${origin}/assets/Alumno1-1.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom ',
                backgroundSize: 'contain',
            }} /> */}

        </Box>

    )
}
