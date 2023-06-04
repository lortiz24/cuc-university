import React from 'react'
import Head from 'next/head'
import { NavbarUi } from '../ui';
import { Box } from '@mui/material'
import { Footer } from '../ui/footer/Footer';


interface Props {
    title?: string;
    children: React.ReactNode,
    description?: string
}


export const MainLayout = ({ children, title = 'Cuc University', description = 'Informacion sobre Cuc university' }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Cuc University" />
                <meta name="description" content={description} />
                <meta name="keywords" content={`${title}`} />
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}

            </Head>

            <NavbarUi />

            <Box
            /* sx={{
                overflowX:'scroll'
            }} */
            >
                {children}
            </Box>

            <Footer />
        </>
    )
}
