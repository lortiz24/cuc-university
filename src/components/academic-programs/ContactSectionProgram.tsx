import { Grid, Box } from '@mui/material'
import React from 'react'
import FormComponent from '../form-contact/FormContactUs'
import { FooterImageDownload } from './FooterImageDownload';
import { useGetOrigin } from '@/hooks/useGetOrigin';


interface Props {
    contactImage: string;
}
export const ContactSectionProgram = ({ contactImage }: Props) => {
    const { origin } = useGetOrigin()
    return (
        <Grid
            container
        // sx={{ backgroundColor: 'red', }}
        >
            <Grid
                item
                xs={12}
                md={6}
            >

            </Grid>
            <Grid
                item
                xs={12}
                md={6}
            >
                <FooterImageDownload withBackgroundImage={false} item1={contactImage} />
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                marginBottom={4}
            >
                <FormComponent onSubmit={(values) => console.log(values)} />
            </Grid>
            <Grid
                item
                xs={0}
                md={6}
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
                    backgroundPosition: 'bottom',
                    backgroundSize: 'contain',
                }}>

                    <Box sx={{
                        minHeight: { xs: 400, md: '100%' },
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
