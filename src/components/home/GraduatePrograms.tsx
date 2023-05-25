
import React from 'react'
import { Typography, Grid, Button, useTheme } from '@mui/material';
import { ProgramCard } from './ProgramCard';
import { graduatePrograms } from '@/data/programs';




export const GraduatePrograms = () => {

    const theme = useTheme()
    return (
        <div style={{
            marginTop: '4rem',
            backgroundColor: theme.palette.background.paper,
            width: '100%',
            padding: '2rem 0px'
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
                    marginTop={{ xs: 2, sm: 4 }}
                >
                    <Button
                        color={'secondary'}
                        variant="outlined"
                        sx={{
                            borderRadius: '5rem',
                        }}
                    >Gradute Programs</Button>
                </Grid>


                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {graduatePrograms.map((programItem, index) => (
                        <ProgramCard key={index} programItem={programItem} />
                    ))}
                </div>


            </Grid>
        </div>
    )
}
