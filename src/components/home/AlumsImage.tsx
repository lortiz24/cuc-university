import { useGetOrigin } from '@/hooks/useGetOrigin'
import Image from 'next/image'
import React from 'react'

export const AlumsImage = () => {

    const { origin } = useGetOrigin()
    
    return (
        <div style={{
            height: '100%',
            width:'100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
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
                    zIndex: 1
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
                    marginLeft: '20rem',
                    zIndex: 2
                }}
            />
        </div>

    )
}
