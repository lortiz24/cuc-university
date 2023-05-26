import { Grid, Typography } from '@mui/material'
import { AlumsImage } from './AlumsImage'
import { CircleImage } from '../circle-image/CircleImage'

export const CucUniversityHome = () => {
    return (
        <Grid container >

            <Grid
                item
                xs={12} sm={12} lg={3} paddingX={{ xs: 8, sm: 0 }}
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
                    CUC University
                </Typography>
                <Typography
                    variant='body2'
                    color={(theme) => theme.palette.secondary.main}
                    fontSize={{ xs: 15, sm: 16 }}
                >
                    A distinguished American institution located in Miami, Florida, delivers a versatile hybrid educational approach that combines online and on-campus learning opportunities in English and Spanish.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={8} marginTop={{ xs: 2, md: 0 }} minHeight={'400px'}>
                <AlumsImage />
            </Grid>
            <Grid item xs={12} minHeight={'auto'} width={'100%'}>
                <CircleImage src={`/assets/team-work-1-black_and_white.jpg`} />
            </Grid>
        </Grid>
    )
}
