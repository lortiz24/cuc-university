import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { CircleImage } from '../circle-image/CircleImage'
import { MisionAndVision } from './MisionAndVision';
import { Alumna } from './Alumna';

export const AboutUsSectionUp = () => {
    const theme = useTheme()

    return (
        <Grid container >
            <Grid
                item
                xs={12} lg={5}
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
                    lineHeight={0.3}
                    fontWeight="bold"
                    fontSize={{ xs: 25, sm: 42, xl: 40 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'start'}
                >
                    CUC University, <Typography
                        variant='caption'
                        lineHeight={1.2}
                        color={(theme) => theme.palette.secondary.main}
                        fontSize={{ xs: 25, sm: 38, xl: 40 }}
                        marginBottom={{ xs: 1, md: 4 }}
                        textAlign={'start'}
                    >
                        a distinguished America institution located in Miami, Florida,
                    </Typography>
                </Typography>

                <Typography
                    variant='body2'
                    color={'#626970'}
                    fontSize={{ xs: 15, sm: 16 }}
                    lineHeight={1.8}
                    style={{ marginBottom: '16px' }}
                >
                    delivers a versatile hybrid educational approach that combines online and on-campus learning opportunities. Our comprehensive academic programs are offered in both Spanish and English, accommodating a diverse range of students.
                </Typography>

                <Typography
                    variant='body2'
                    color={'#626970'}
                    lineHeight={1.8}
                    fontSize={{ xs: 15, sm: 16 }}
                >
                    With a primary emphasis on business education, CUC University is dedicated to providing students with the essential knowledge and skills to thrive in the competitive global marketplace. Our unwavering commitment to excellence and quality ensures that our curriculum
                    prepares students to adeptly navigate the ever-evolving business
                    environment and apply their academic expertise to real-world challenges.
                </Typography>
            </Grid>
            <Grid
                item xs={12}
                lg={7}
                marginTop={{ xs: 2, md: 0 }}
                minHeight={{ xs: '300px', sm: '600px' }}
                display='flex'
                flexDirection='column'
                alignItems='start'
                sx={{ zIndex: -20, /* backgroundColor:'red' */ }}
            >
                <Alumna
                    item1={`/assets/Alumna-3.png`}
                    backgroundImage={`/assets/City-1.jpg`}
                    withBackgroundImage={false}
                />
            </Grid>
            <Grid
                item
                xs={12}
                width={'100%'}
                sx={{ position: 'relative', top: -20, zIndex: 1 }}>
                <CircleImage
                    src={`/assets/figura2.png`}
                    backgroundColor={theme.palette.background.paper}
                    backgroundPosition='center'
                    backgroundSize='contain'
                    whithouBoxBackground
                >
                    <MisionAndVision />
                </CircleImage>
            </Grid>
        </Grid >

    )
}
