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
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: {
                xs: 'start',
                sm: 'start',
                md: 'start',
                lg: 'start',
                xl: 'center',
            },
            alignItems: 'flex-end',
            backgroundImage: `url(${origin}/assets/figura1.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100%',
        }}>
            <Image
                src={'/assets/Alumna-1-1.png'}
                alt='alumna-with-cellphone'
                width={0}
                height={0}
                sizes="100vw"
                style={{
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
            />
        </Box>

    )
}
