import React from 'react'
import { Typography, Grid, Button, Box } from '@mui/material';
import { ProgramCard } from './ProgramCard';
import { underGraduatePrograms } from '@/data/programs';
import { useGetOrigin } from '@/hooks/useGetOrigin';


export const UndergraduatePrograms = () => {
    const { origin } = useGetOrigin()
    return (
        <Box sx={{
            marginTop: 4,
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: {
                xs: 'start',
                sm: 'start',
                md: 'start',
                lg: 'start',
                xl: 'center',
            },
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
                        fontWeight="bold"
                        variant='h2'
                        color={(theme) => theme.palette.primary.main}
                        textAlign={'center'}
                    >Academic Programs
                    </Typography>
                </Grid>
                <Grid
                    item
                    spacing={12}
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
                        }}
                    >Undergradute Programs</Button>
                </Grid>
                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    {underGraduatePrograms.map((programItem, index) => (
                        <ProgramCard key={index} programItem={programItem} />
                    ))}
                </div>




            </Grid>
        </Box>
    )
}
