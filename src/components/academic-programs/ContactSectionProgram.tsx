import { Grid, Box } from '@mui/material'
import React from 'react'
import FormComponent from '../form-contact/FormContactUs'
import { FooterImageDownload } from './FooterImageDownload';
import { useGetOrigin } from '@/hooks/useGetOrigin';
import { DownloadItem } from '@/interfaces';
import { useTranslation } from 'react-i18next';



interface Props {
    contactImage: string;
    downloadnItem: DownloadItem;
}
export const ContactSectionProgram = ({ contactImage, downloadnItem }: Props) => {
    const {t} = useTranslation()
    const { origin } = useGetOrigin()
    return (
        <Grid
            container
        >

            {/* <Grid
                item
                xs={12}
                display={'flex'}
                justifyContent={'end'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <FooterImageDownload downloadnItem={downloadnItem} />
            </Grid> */}
            <Grid
                item
                xs={12}
                md={6}
                lg={6}
                marginBottom={4}
                paddingX={{ xs: 4, md: 10, lg: 20 }}
                display={'flex'}
                justifyContent={'center'}
                flexDirection={'column'}
                alignItems={'center'}
            // sx={{ backgroundColor: 'blue', }}
            >
                <FormComponent onSubmit={(values) => console.log(values)} TextFieldMessage={false} title={t("contactus.title")} />
            </Grid>
            <Grid
                item
                xs={0}
                md={6}
                lg={6}
            // sx={{ backgroundColor: 'yellow' }}
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
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom center',
                    backgroundSize: 'cover',

                }}>

                    <Box sx={{
                        minHeight: { xs: 400, md: '700px' },
                        // backgroundColor: 'pink',
                        minWidth: '100%',
                        backgroundImage: `url(${origin}${contactImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom center',
                        backgroundSize: 'contain',

                    }} />
                </Box>
            </Grid>

        </Grid>
    )
}
