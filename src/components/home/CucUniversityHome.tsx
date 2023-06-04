import { Button, Grid, Typography } from '@mui/material'
import { ContentWithBackgrounImage } from '../ui/ContentWithBackgrounImage'
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
                    variant='h2'
                    color={(theme) => theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize={{ xs: 25, sm: 40 }}
                    marginBottom={{ xs: 1, md: 2 }}
                    textAlign={'start'}
                >
                    CUC University
                </Typography>
                <Typography
                    lineHeight={2}
                    variant='body2'
                    color={'#626970'}
                    fontSize={{ xs: 15, sm: 16 }}
                >
                    A distinguished American institution located in Miami, Florida, delivers a versatile hybrid educational approach that combines online and on-campus learning opportunities in English and Spanish.
                </Typography>
                <Grid item xs={6} md={4}>
                <Button
                    type="submit"
                    variant="contained"
                    color='secondary'
                    fullWidth
                    sx={{
                        marginY:2,
                        borderRadius: 30,
                        textDecoration:'none',
                        textTransform: 'none',
                        fontSize:17
                    }}
                    >
                    See More
                </Button>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={7} marginTop={{ xs: 2, md: 0 }} minHeight={{ xs: '300px', sm: '433px' }}>
                <ContentWithBackgroundv2 />
            </Grid>
            <Grid item xs={12} minHeight={'auto'} width={'100%'} sx={{ zIndex: 1, position: 'relative', top: -35, }}>
                <CircleImage src={`/assets/team-work-1-black_and_white.jpg`} height={{ xs: '400px', sm: '450px', md: '500px' }}>
                    <ContenCircleImage />
                </CircleImage>
            </Grid>
        </Grid>
    )
}
