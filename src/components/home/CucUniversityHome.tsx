import { Button, Grid, Typography, Box } from '@mui/material'
import { ContentWithBackgroundv2 } from '../ui/ContentWithBackgroundv2'
import { useTranslation } from 'react-i18next'

export const CucUniversityHome = () => {
    const { t } = useTranslation()
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
                    {t('home.title')}
                </Typography>
                <Typography
                    lineHeight={2}
                    variant='body2'
                    fontSize={20}
                >
                    {t('home.introduction')}
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
                        {t('home.introduction.button')}
                    </Button>
                </Box>
                
            </Grid>
            <Grid
                item
                xs={12}
                lg={7}
                marginTop={{ xs: 2, md: 0 }}
                minHeight={{ xs: '300px', sm: '600px', md: '650px', lg: '750px', xl: '850px' }}
            >

                <ContentWithBackgroundv2 />
            </Grid>
           
        </Grid>
    )
}
