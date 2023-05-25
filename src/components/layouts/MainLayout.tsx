import React from 'react'
import Head from 'next/head'
import { NavbarUi } from '../ui';
import { Box } from '@mui/material'


interface Props {
    title?: string;
    children: React.ReactNode,
    description?: string
}


export const MainLayout = ({ children, title = 'Cuc University', description = 'Informacion sobre Cuc university' }: Props) => {
    return (
        <Box sx={{
            flexFlow: 1
        }}>
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

            {/* <div style={{
                padding: '0rem 10rem',
                paddingBottom: 20,
            }}>
                {children}
            </div> */}

            <div>
                {children}
            </div>

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
