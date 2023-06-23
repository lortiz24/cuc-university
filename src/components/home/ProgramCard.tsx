import React from 'react'
import { ProgramItem } from '@/interfaces/Programs.interface'
import { Box, Card, CardMedia, Grid, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next';

interface Props {
    programItem: ProgramItem
}

export const ProgramCard = ({ programItem }: Props) => {
    const theme = useTheme()
    const borderRadius = '4rem'
    // const { t } = useTranslation()
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
                <div>
                    <Card
                        sx={{
                            maxWidth: '289px',
                            height: '344px',
                            borderRadius,
                            '@media (min-width: 320px)': {
                                maxWidth: '289px',
                                height: '344px',
                            },
                            '@media (max-width: 320px)': {
                                maxWidth: '100%',
                                height: '300px',
                            },
                        }}
                    >
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
                </div>
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
                    {/* {t(programItem.title)} */}
                    {programItem.title}
                </Typography>
            </Box>

        </>
    )
}
