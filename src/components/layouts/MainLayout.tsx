import React from 'react'
import Head from 'next/head'
import { NavbarUi } from '../ui';
import { Box, Container } from '@mui/material'


interface Props {
    title?: string;
    children: React.ReactNode
}


export const MainLayout = ({ children, title = 'Cuc University' }: Props) => {
    return (
        <Box sx={{
            flexFlow: 1
        }}>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Luis Ortiz" />
                <meta name="description" content={`Información sobre el pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}

            </Head>

            <NavbarUi />

            <Box sx={{
                paddingX: { xs:2,sm:15 },
                paddingBottom: 20,
            }}>
                {children}
            </Box>

            {/* <Container sx={
                {
                    marginTop: 3,
                    paddingBottom: 20,
                }
            }>
                {children}
            </Container> */}

        </Box>
    )
}
