import { Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { FooterImageDownload } from './FooterImageDownload';
import { DownloadItem } from '@/interfaces';



interface Props {
    description: string;
    objective: string;
    downloadnItem: DownloadItem;
}
export const DescriptionAndObjectives = ({ description, objective, downloadnItem }: Props) => {
    const theme = useTheme()



    return (
        <Grid
            container
            paddingX={{ xs: 4, sm: 15, md: 15, xl: 20 }}
            columnSpacing={10}
        >
            <Grid
                item
                xs={12}
                lg={6}
                marginTop={{ xs: 55, sm: 37, md: 40, lg: 40, xl: 40 }}
            // paddingX={{ xs: 4, sm: 15, md: 15, xl: 20 }}
            >
                <Typography
                    lineHeight={1.2}
                    color={theme.palette.primary.main}
                    fontWeight={'bold'}
                    fontSize={{ xs: 25, sm: 38, xl: 50 }}
                    textAlign={'start'}
                >
                    Description
                </Typography>
                <Typography
                    variant='caption'
                    lineHeight={2.2}
                    color={(theme) => theme.palette.secondary.main}
                    fontSize={{ xs: 20, sm: 20, xl: 20 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'start'}
                >
                    {description}
                </Typography>

            </Grid>
            <Grid
                item
                xs={12}
                lg={6}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'end'}
                // paddingX={{ xs: 4, sm: 15, md: 4, xl: 20 }}
                marginTop={{ xs: 2, sm: 2, md: 10, lg: 0 }}
            // sx={{ backgroundColor: 'red' }}
            >
                <Typography
                    lineHeight={1.6}
                    color={theme.palette.primary.main}
                    fontSize={{ xs: 25, sm: 38, xl: 40 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    fontWeight={'bold'}
                    textAlign={'end'}
                >
                    Objective
                </Typography>
                <Typography
                    variant='caption'
                    lineHeight={2.2}
                    color={(theme) => theme.palette.secondary.main}
                    fontSize={{ xs: 20, sm: 20, xl: 20 }}
                    marginBottom={{ xs: 1, md: 4 }}
                    textAlign={'end'}
                >
                    {objective}
                </Typography>
                <FooterImageDownload downloadnItem={downloadnItem} />

            </Grid>
        </Grid >
    )
}
