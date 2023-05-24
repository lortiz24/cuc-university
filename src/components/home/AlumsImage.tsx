import Image from 'next/image'
import React from 'react'

export const AlumsImage = () => {
    return (
        <div>
            <Image
                src={'/assets/Alumna-1-1.png'}
                alt="Imagen"
                width={200}
                height={200}
                style={{
                    objectFit: 'cover',
                    objectPosition: 'bottom',
                }} />
        </div>
    )
}
