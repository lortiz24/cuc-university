import { TitleProgram } from '@/interfaces';
import { Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';

interface Props {
    publicImg: string;
    title: TitleProgram;
}

export const ContentBannerThanks = ({ publicImg, title }: Props) => {
    const { t } = useTranslation()
    return (
        <Grid
            container
            minHeight={{ xs: 800, md: 900 }}
        >
            <Grid
                item
                xs={12}
                md={12}
                lg={5}
                display={'flex'}
                justifyContent={'center'}
                flexDirection='column'
                alignItems={'center'}
                maxHeight={{ xs: 500, md: 800 }}
                // paddingLeft={{ xl: 15 }}
                paddingX={{ xs: 10, md: 0 }}
            // sx={{ backgroundColor: 'red' }}
            >
                <Typography
                    variant="h2"
                    color={(theme) => theme.palette.primary.main}
                    lineHeight={1}
                    fontWeight="bold"
                    fontSize={{ xs: 40, sm: 55, xl: 60 }}
                    marginBottom={{ xs: 15, sm: 20, md: 30 }}
                    textAlign={{ xs: 'center', md: "center", lg: "right" }} // Alinear el texto a la derecha
                >
                    {t(title.type)}{" "}
                    <Typography
                        variant="caption"
                        lineHeight={1.2}
                        color={(theme) => theme.palette.secondary.main}
                        fontSize={{ xs: 30, sm: 40, xl: 60 }}
                        marginBottom={{ xs: 1, md: 4 }}
                        textAlign={{ xs: 'center', md: "center", lg: "right" }}
                    >
                        {t(title.specialty)}
                    </Typography>
                </Typography>
            </Grid>

        </Grid>
    )
}
