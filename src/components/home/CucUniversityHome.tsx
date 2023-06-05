import { Button, Grid, Typography, Box } from '@mui/material'
import { CircleImage } from '../circle-image/CircleImage'
import { ContenCircleImage } from './ContenCircleImage'
import { ContentWithBackgroundv2 } from '../ui/ContentWithBackgroundv2'

export const CucUniversityHome = () => {
    return (
        <Grid container >
            <Grid
                item
                xs={12} lg={5}
                paddingLeft={{ xs: 0, xl: 20 }}
                paddingX={{ xs: 4, }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                }}
            >
                <Typography
                    color={(theme) => theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize={60}
                    marginBottom={{ xs: 1, md: 2 }}
                    textAlign={'start'}
                >
                    CUC University
                </Typography>
                <Typography
                    lineHeight={2}
                    variant='body2'
                    fontWeight={'regular'}  
                    color={'#626970'}
                    fontSize={20}
                // fontSize={{ xs: 15, sm: 16 }}
                >
                    A distinguished American institution located in Miami, Florida, delivers a versatile hybrid educational approach that combines online and on-campus learning opportunities in English and Spanish.
                </Typography>
                <Box
                    marginTop={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="center"
                    width={'100%'}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        color='secondary'
                        sx={{
                            borderRadius: 30,
                            textDecoration: 'none',
                            textTransform: 'none',
                            fontSize: 25,
                            paddingX: 2,
                            minWidth: '180px',
                        }}
                    >
                        See More
                    </Button>
                </Box>
                {/* <Grid item xs={6} md={4}>
                   
                </Grid> */}
            </Grid>
            <Grid
                item
                xs={12}
                lg={7}
                marginTop={{ xs: 2, md: 0 }}
                minHeight={{ xs: '300px', sm: '600px', md: '850px' }}
            >

                <ContentWithBackgroundv2 />
            </Grid>
            <Grid item xs={12} minHeight={'auto'} width={'100%'} sx={{ zIndex: 1, position: 'relative', top: -35, }}>
                <CircleImage
                    src={`/assets/team-work-1-black_and_white.jpg`}
                    // height={{ xs: '400px', sm: '300px', md: '300px' }}
                    minHeight={{ xs: '400px', md: '400px', xl: '490px' }}
                >
                    <ContenCircleImage />
                </CircleImage>
            </Grid>
        </Grid>
    )
}
