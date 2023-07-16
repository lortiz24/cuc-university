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
            height={'100%'}
            display={'flex'}
            paddingX={{ xs: 0, lg: 10 }}
            justifyContent={'center'}
            flexDirection='column'
            alignItems={'left'}
        >
            <Grid
                item
                xs={12}
                md={12}
                lg={6}
                display={'flex'}
                justifyContent={'center'}
                flexDirection='column'
                alignItems={'center'}
                paddingX={{ xs: 10, md: 5 }}

            >
                <Typography
                    variant="h2"
                    color={(theme) => theme.palette.primary.main}
                    lineHeight={1}
                    fontWeight="bold"
                    fontSize={{ xs: 35, sm: 55, xl: 60 }}
                    marginBottom={{ xs: 15, sm: 10 }}
                    textAlign={'left'} // Alinear el texto a la derecha
                >
                    {t(title.type)}{" "}
                    <Typography
                        variant="caption"
                        lineHeight={1.2}
                        color={(theme) => theme.palette.secondary.main}
                        fontSize={{ xs: 27, sm: 40, xl: 60 }}
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
