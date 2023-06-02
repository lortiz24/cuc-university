import React from 'react'
import { Box } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'





export const NegroImage = () => {

    const { origin } = useGetOrigin()
    return (
        <Box sx={{ display: 'flex', marginTop: '2rem', width: '100%', height: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '300px',
                    width: '100%',
                    position: 'relative',
                    backgroundColor: 'yellow',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundImage: `url(${origin}/assets/Negro.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top',
                        backgroundSize: 'contain',
                    }}
                >
                </Box>
            </Box>
        </Box>

    )
}

{/* <Box
    sx={{
        position: 'relative',
        height: '100%', // Cambiado a un alto relativo
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${origin}/assets/Negro.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'contain',
    }}
>
</Box> */}