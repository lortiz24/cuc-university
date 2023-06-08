import React from 'react'
import { Typography, Grid, Button, Box, useTheme } from '@mui/material';
import { ProgramCard } from './ProgramCard';
import { useGetOrigin } from '@/hooks/useGetOrigin';
import { ProgramItem } from '@/interfaces/Programs.interface';
import Link from 'next/link';


interface Props {
    underGraduatePrograms: ProgramItem[];
}

export const UndergraduatePrograms = ({ underGraduatePrograms }: Props) => {
    const theme = useTheme()
    const { origin } = useGetOrigin()
    return (
        <Box sx={{
            marginTop: 4,
            height: '100%',
            width: '100%',
            backgroundImage: `url(${origin}/assets/figura2.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: { xs: 'top 15rem right 5rem', sm: 'left' },
            backgroundSize: { xs: '100%', sm: '40%' },
        }}>
            <Grid container
                display={'flex'}
                justifyContent={'center'}>
                <Grid
                    item
                    display={'flex'}
                    justifyContent={'center'}
                    width={'100%'}
                >
                    <Typography
                        fontSize={60}
                        fontWeight="bold"
                        color={(theme) => theme.palette.primary.main}
                        textAlign={'center'}
                    >Academic Programs
                    </Typography>
                </Grid>
                <Grid
                    item
                    display={'flex'}
                    justifyContent={'center'}
                    width={'100%'}
                    marginTop={{ xs: 2, sm: 4 }}
                >
                    <Button
                        color={'secondary'}
                        variant="outlined"
                        sx={{

                            borderRadius: '5rem',
                            pointerEvents: 'none', // Agregar esta línea
                            textTransform: 'none',
                            fontSize: { xs: 25, sm: 30 },
                            fontWeight: 400
                        }}
                    >Undergraduate Programs</Button>
                    {/* <Typography
                        fontSize={30}
                        fontWeight={400}
                        sx={{
                            paddingX: 2,
                            paddingY: 1,
                            border: `1px solid ${theme.palette.secondary.main}`,
                            borderRadius: '5rem',
                        }}>Undergraduate Programs</Typography> */}
                </Grid>
                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    columnGap: '7rem'
                }}>
                    {underGraduatePrograms.map((programItem, index) => (
                        <Link key={index} style={{ textDecoration: 'none' }} href={`academic-programs${programItem.path}`} passHref>
                            <ProgramCard programItem={programItem} />
                        </Link>
                    ))}
                </div>




            </Grid>
        </Box>
    )
}
