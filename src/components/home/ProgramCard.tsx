import { ProgramItem } from '@/interfaces/Programs.interface'
import { Card, CardMedia, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'

interface Props {
    programItem: ProgramItem
}

export const ProgramCard = ({ programItem }: Props) => {
    const theme = useTheme()
    const borderRadius = '3rem'

    return (
        <>
            {/* <Grid
                item
                direction="column"
                alignItems="center"
                justifyContent={'center'}
                display={'flex'}
                xs={12}
                sm={12}
                md={6}
            >  */}
            <div style={{
                margin: '0px 2rem',
                marginTop: '2rem'
            }}>
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
                <Typography variant='body2' color={theme.palette.primary.main} sx={{ width: 200, textAlign: 'center', marginTop: '10px' }}>
                    {programItem.title}
                </Typography>
            </div>
            {/*  </Grid> */}
        </>
    )
}
