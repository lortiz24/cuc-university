import React from 'react'
import { Typography, Grid, Button } from '@mui/material';
import { ProgramCard } from './ProgramCard';
import { underGraduatePrograms } from '@/data/programs';
import { graduatePrograms } from '@/data/programs';
import Image from 'next/image';


export const UndergraduatePrograms = () => {
    return (
        <div style={{
            marginTop: '4rem'
        }}>
            <Image
                src={'/assets/figura2.png'}
                alt='Alumno-with-notebook'
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    position: 'absolute',
                    width: '60rem',
                    marginLeft: '-20rem',
                    marginBottom:'4rem',
                    zIndex: -2
                }}
            />
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
                    marginTop:'2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap:'2rem'
                }}>
                    {underGraduatePrograms.map((programItem, index) => (
                        <ProgramCard key={index} programItem={programItem} />
                    ))}
                </div>




            </Grid>
        </div>
    )
}
