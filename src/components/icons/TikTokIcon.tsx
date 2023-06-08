import React from 'react'


interface Props {
    className?: string
}

export const TikTokIcon = ({ className }: Props) => {
    return (
        <div className={className} style={{
            display: 'flex',
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <style>{'svg{fill:#ffffff}'}</style>
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
            </svg>
        </div>
    );
};
