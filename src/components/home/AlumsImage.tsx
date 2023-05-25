import Image from 'next/image'
import React from 'react'

export const AlumsImage = () => {
    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Image
                src={'/assets/Alumna-1-1.png'}
                alt='aluma1'
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
                alt='aluma2'
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
