import React from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';



interface Props {
    title?: string;
    children: React.ReactNode
}


export const MainLayout = ({ children, title }: Props) => {
    return (
        <>
            <Head>
                <title>{title || 'Cuc University'}</title>
                <meta name="author" content="Luis Ortiz" />
                <meta name="description" content={`Información sobre el pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}

            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>

        </>
    )
}
