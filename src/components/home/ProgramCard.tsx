import React from 'react'
import { ProgramItem } from '@/interfaces/Programs.interface'
import { Box, Card, CardMedia, Grid, Typography, useTheme } from '@mui/material'

interface Props {
    programItem: ProgramItem
}

export const ProgramCard = ({ programItem }: Props) => {
    const theme = useTheme()
    const borderRadius = '4rem'

    return (
        <>
            <Box
                sx={{
                    marginTop: '2rem',
                    marginX:6,
                    '&:hover .hoverTypography': {
                        color: theme.palette.primary.main,
                    },
                }}
            >
                <Card sx={{
                    width: '289px',
                    height: '344px',
                    borderRadius,
                    /* display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems:'center', */
                }}>
                    <CardMedia
                        sx={{
                            borderRadius,
                            height: '100%',
                            width: '100%',
                        }}
                        component="img"
                        image={programItem.publicImg}
                        alt="Paella dish"
                    />
                </Card>
                <Typography
                    fontSize={{ xs: 24 }}
                    color={theme.palette.secondary.main}
                    sx={{
                        width: '289px',
                        textAlign: 'center',
                        marginTop: '15px',
                    }}
                    className="hoverTypography" // Agrega una clase para seleccionar el Typography
                >
                    {programItem.title}
                </Typography>
            </Box>

        </>
    )
}
