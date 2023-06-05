import React from 'react'
import Head from 'next/head'
import { NavbarUi } from '../ui';
import { Box } from '@mui/material'
import { Footer } from '../ui/footer/Footer';
import { useGetOrigin } from '@/hooks/useGetOrigin';


interface Props {
    title?: string;
    children: React.ReactNode,
    description?: string
    image?: string
}


export const MainLayout = ({ children, title = 'Cuc University', description = 'information about cuc university', image = '/assets/MainLogo2.png' }: Props) => {

    const { origin } = useGetOrigin()
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Cuc University" />
                <meta name="description" content={description} />
                <meta name="keywords" content={`${title}, miami, miami university, america institution`} />
                <meta property="og:title" content={`Information about ${title}`} />
                <meta property="og:description" content={`This is the page about of ${title}`} />
                <meta property="og:image" content={`${origin}${image}`} />
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
