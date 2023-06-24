import React from 'react'
import { Typography, Grid, Button, Box } from '@mui/material';
import { ProgramCard } from './ProgramCard';
import { useGetOrigin } from '@/hooks/useGetOrigin';
import { ProgramItem } from '@/interfaces/Programs.interface';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


interface Props {
    underGraduatePrograms: ProgramItem[];
}

export const UndergraduatePrograms = ({ underGraduatePrograms }: Props) => {
    const { origin } = useGetOrigin()
    const { t } = useTranslation()
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
                    >{t('home.programs-section.title')}
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
                    >{t('home.programs-section.type-one')}</Button>
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
