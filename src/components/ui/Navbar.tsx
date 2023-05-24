import React from 'react'
import { Box, Typography } from '@mui/material'
import NextLink from 'next/link'

const origin = (typeof window === 'undefined') ? '' : window.location.origin;


export const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Box
                    component={'img'}
                    sx={{
                        maxHeight: { xs: 200, md: 167 },
                        maxWidth: { xs: 300, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={`${origin}/assets/9744a3a642b478781df6cd9b3dde8724.png`} />
            </div>

            <ul style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', listStyleType: 'none' }}>
                <NextLink href={'/'}>
                    <Typography className='navbar-item' color={'textPrimary'} style={{ marginRight: '10px' }}>Home</Typography>
                </NextLink>
                <NextLink href={'/'}>
                    <Typography color={'textPrimary'} style={{ marginRight: '10px' }}>Inicio</Typography>
                </NextLink>
            </ul>
        </nav>

    )
}



{/* <Box sx={{ display: 'flex' }}>
    <AppBar
                component={'nav'}
                elevation={0}
                color='transparent'>
                <Toolbar >
                    <IconButton sx={{
                        '&:hover': {
                            backgroundColor: 'transparent'
                        },
                    }}>
                        <Box
                            component={'img'}
                            sx={{
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="The house from the offer."
                            src={`${origin}/assets/9744a3a642b478781df6cd9b3dde8724.png`} />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button >
                            Home
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
</Box>
 */}

