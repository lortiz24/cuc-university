import React from 'react'
import { ProgramItem } from '@/interfaces/Programs.interface'
import { Box, Card, CardMedia, Grid, Typography, useTheme } from '@mui/material'

interface Props {
    programItem: ProgramItem
}

export const ProgramCard = ({ programItem }: Props) => {
    const theme = useTheme()
    const borderRadius = '3rem'

    return (
        <>
            <Box
                sx={{
                    marginTop: '2rem',
                    '&:hover .hoverTypography': {
                        color: theme.palette.primary.main,
                    },
                }}
            >
                <Card sx={{ width: 200, borderRadius }}>
                    <CardMedia
                        sx={{
                            borderRadius,
                            height: '250px',
                            width: '200px',
                        }}
                        component="img"
                        height="194"
                        image={programItem.publicImg}
                        alt="Paella dish"
                    />
                </Card>
                <Typography
                    variant="body1"
                    color={theme.palette.secondary.main}
                    sx={{
                        width: 200,
                        textAlign: 'center',
                        marginTop: '10px',
                    }}
                    className="hoverTypography" // Agrega una clase para seleccionar el Typography
                >
                    {programItem.title}
                </Typography>
            </Box>

        </>
    )
}
