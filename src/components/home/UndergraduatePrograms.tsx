import React from 'react'
import { Typography, Grid, Button } from '@mui/material';
import { ProgramCard } from './ProgramCard';
import { underGraduatePrograms } from '@/data/programs';
import { graduatePrograms } from '@/data/programs';


export const UndergraduatePrograms = () => {
    return (
        <div style={{
            marginTop: '4rem'
        }}>
            <Grid container
                display={'flex'}
                justifyContent={'center'}>
                <Grid
                    item
                    spacing={12}
                    display={'flex'}
                    justifyContent={'center'}
                    width={'100%'}
                >
                    <Typography
                        fontWeight="bold"
                        variant='h2'
                        color={(theme) => theme.palette.primary.main}>Academic Programs
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
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {underGraduatePrograms.map((programItem, index) => (
                        <ProgramCard key={index} programItem={programItem} />
                    ))}
                </div>

               


            </Grid>
        </div>
    )
}
