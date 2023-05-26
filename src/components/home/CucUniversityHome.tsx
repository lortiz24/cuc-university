import { Grid, Typography } from '@mui/material'
import { AlumsImage } from './AlumsImage'

export const CucUniversityHome = () => {
    return (
        <Grid container paddingX={{ xs: 2, sm: 5, md: 10, lg: 15 }}>
            <Grid item xs={12} sm={12} lg={3} >
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', }}>
                    <Typography
                        variant='h2'
                        color={(theme) => theme.palette.primary.main}
                        fontWeight="bold"
                        fontSize={{ xs: 20, sm: 35 }}
                        marginBottom={{ xs: 1, md: 2 }}
                    >
                        CUC University
                    </Typography>
                    <Typography
                        variant='body2'
                        color={(theme) => theme.palette.secondary.main}
                        fontSize={{ xs: 10, sm: 16 }}
                    >
                        A distinguished American institution located in Miami, Florida, delivers a versatile hybrid educational approach that combines online and on-campus learning opportunities in English and Spanish.
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={8} marginTop={{xs:2,sm:0}} minHeight={{ xs: '20rem', sm: '30rem', md: '40rem' }}>
                <AlumsImage />
            </Grid>
        </Grid>
    )
}
