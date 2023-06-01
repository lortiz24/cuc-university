import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { CircleImage } from '../circle-image/CircleImage'
import { MisionAndVision } from './MisionAndVision';
import { AlumsImage } from '../home/AlumsImage';
export const AboutUsSectionUp = () => {
    const theme = useTheme()
    return (
        <Grid container >
            <Grid
                item
                xs={12} lg={4}
                paddingLeft={{ xs: 0, xl: 20 }}
                paddingX={{ xs: 4, }}
                paddingBottom={{ xs: 4 }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                }}
            >
                <Typography
                    variant='h2'
                    color={(theme) => theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize={{ xs: 25, sm: 40 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'start'}
                >
                    CUC University,<Typography
                        variant='h2'
                        color={(theme) => theme.palette.secondary.main}
                        fontWeight="bold"
                        fontSize={{ xs: 25, sm: 40 }}
                        marginBottom={{ xs: 1, md: 4 }}
                        textAlign={'start'}
                    >
                        a distinguished America institution located in Miami, Florida,
                    </Typography>
                </Typography>

                <Typography
                    variant='body2'
                    color={(theme) => theme.palette.secondary.main}
                    fontSize={{ xs: 15, sm: 16 }}
                    style={{ marginBottom: '16px' }}
                >
                    delivers a versatile hybrid educational approach that combines online and on-campus learning opportunities. Our comprehensive academic programs are offered in both Spanish and English, accommodating a diverse range of students.
                </Typography>

                <Typography
                    variant='body2'
                    color={(theme) => theme.palette.secondary.main}
                    fontSize={{ xs: 15, sm: 16 }}
                >
                    With a primary emphasis on business education, CUC University is dedicated to providing students with the essential knowledge and skills to thrive in the competitive global marketplace. Our unwavering commitment to excellence and quality ensures that our curriculum
                    prepares students to adeptly navigate the ever-evolving business
                    environment and apply their academic expertise to real-world challenges.
                </Typography>
            </Grid>
            <Grid item xs={12} lg={8} marginTop={{ xs: 2, md: 0 }} minHeight={'400px'}>
                <AlumsImage />
            </Grid>
            <Grid item xs={12} minHeight={'auto'} width={'100%'}>
                <CircleImage
                    src={`/assets/figura2.png`}
                    backgroundColor={theme.palette.background.paper}
                    backgroundPosition='center'
                    backgroundSize='containe'
                    minHeight={{ xs: 600 }}
                >
                    <MisionAndVision />
                </CircleImage>
            </Grid>
        </Grid>

    )
}
