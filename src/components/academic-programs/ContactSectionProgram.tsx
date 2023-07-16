import { Grid, Box } from '@mui/material'
import React from 'react'
import FormComponent from '../form-contact/FormContactUs'
import { useGetOrigin } from '@/hooks/useGetOrigin';
import { DownloadItem, FormContact } from '@/interfaces';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';


interface Props {
    contactImage: string;
    downloadnItem: DownloadItem;
}

export const ContactSectionProgram = ({ contactImage, downloadnItem }: Props) => {
    const { t } = useTranslation()
    const { origin } = useGetOrigin()
    const router = useRouter()

    const onHandledSubmit = (values: FormContact) => {
        console.log('values=>', values)
        router.push(`${router.asPath}/thanks-for-writing-us`)
    }

    return (
        <Grid
            container
        >

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
            >
                <FormComponent onSubmit={onHandledSubmit} TextFieldMessage={false} title={t("contactus.title")} />
            </Grid>
            <Grid
                item
                xs={0}
                md={6}
                lg={6}
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
