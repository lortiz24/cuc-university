
import React from 'react'
import { Grid, Button, useTheme } from '@mui/material';
import { ProgramCard } from './ProgramCard';
import { ProgramItem } from '@/interfaces/Programs.interface';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


interface Props {
    graduatePrograms: ProgramItem[];
}


export const GraduatePrograms = ({ graduatePrograms }: Props) => {

    const theme = useTheme()
    const { t } = useTranslation()
    return (
        <div style={{
            marginTop: '4rem',
            backgroundColor: theme.palette.background.paper,
            width: '100%',
            padding: '2rem 0px'
        }}>
            <Grid container
                display={'flex'}
                justifyContent={'center'}
                marginBottom={{ xs: 10 }}
            >
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
                    >{t('home.programs-section.type-two')}</Button>
                </Grid>


                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    columnGap: '7rem'
                }}>
                    {graduatePrograms.map((programItem, index) => (
                        <Link key={index} style={{ textDecoration: 'none' }} href={`academic-programs${programItem.path}`} passHref>
                            <ProgramCard programItem={programItem} />
                        </Link>
                    ))}
                </div>


            </Grid>
        </div>
    )
}
