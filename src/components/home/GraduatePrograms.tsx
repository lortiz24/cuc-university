
import React from 'react'
import { Grid, Button, useTheme } from '@mui/material';
import { ProgramCard } from './ProgramCard';
import { ProgramItem } from '@/interfaces/Programs.interface';


interface Props {
    graduatePrograms: ProgramItem[];
}


export const GraduatePrograms = ({ graduatePrograms }: Props) => {

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
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    {graduatePrograms.map((programItem, index) => (
                        <ProgramCard key={index} programItem={programItem} />
                    ))}
                </div>


            </Grid>
        </div>
    )
}
