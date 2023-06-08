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
    keywords?: string
    height100vh?: boolean
}


export const MainLayout = ({ children, title = 'CUC UNIVERSITY', description = 'information about cuc university', image = '/assets/MainLogo2.png', keywords, height100vh }: Props) => {

    const { origin } = useGetOrigin()
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="CUC University" />
                <meta name="description" content={description} />
                <meta name="keywords" content={`${title}, ${keywords}, Miami, Miami University, American institution`} />
                <meta property="og:title" content={`${title.toUpperCase()} | CUC University - Miami`} />
                <meta property="og:description" content={`This is the page about ${title} at CUC University - Miami`} />
                <meta property="og:image" content={`${origin}${image}`} />
                <meta property="og:type" content="website" />
            </Head>


            <NavbarUi />

            <Box
                sx={{
                    minHeight: height100vh ? '100vh' : '0px',
                }}
            >
                {children}
            </Box>

            <Footer />
        </>
    )
}
