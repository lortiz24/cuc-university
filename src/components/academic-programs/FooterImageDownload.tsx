import { Box, Button, Grid, Typography } from '@mui/material'

interface Props {
    backgroundImage?: string;
    item1?: string;
    withBackgroundImage?: boolean;
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const FooterImageDownload = ({
    backgroundImage = `/assets/figura1.png`,
    item1 = `/assets/Grupo-alumnos.png`,
    withBackgroundImage = true
}: Props) => {

    return (

        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Grid
                item
                xs={12}
                marginTop={4}
            >
                <Typography
                    variant='caption'
                    lineHeight={1.2}
                    color={(theme) => theme.palette.secondary.main}
                    fontSize={{ xs: 20, sm: 20, xl: 20 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'center'}
                >
                    Study Plan and Course Catalogue
                </Typography>
            </Grid>
            <Grid
                item
                xs={8}
                marginTop={4}
            >
                <Button
                    variant="contained"
                    color='secondary'

                    sx={{
                        borderRadius: 30,
                        textDecoration: 'none',
                        textTransform: 'none',
                        fontSize: 18,
                        color: '#FFFFF',
                        paddingX:5
                    }}
                >
                    Download
                </Button>
            </Grid>
            {/*  <Grid
                item
                xs={12}
            >
                <Box sx={{
                    position: 'relative',
                    bottom: 0,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    backgroundImage: withBackgroundImage ? `url(${origin}${backgroundImage})` : '',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    backgroundSize: 'contain',
                }}>

                    <Box sx={{
                        minHeight: '100%',
                        minWidth: '100%',
                        backgroundImage: `url(${origin}${item1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom center',
                        backgroundSize: 'contain',

                    }} />
                </Box>
            </Grid> */}
        </Grid>

    )
}