import React from 'react'
import { Box, Grid, List, Typography, useTheme } from '@mui/material'
import { useGetOrigin } from '@/hooks/useGetOrigin'
import { MisionAndVision } from '../about-us/MisionAndVision'
import { AdmissionBackground } from './AdmissionBackground'
import { TextWithIcon } from '../about-us/TextWithIcon'

export const AdmissionsRequirements = () => {
    const { origin } = useGetOrigin()
    const theme = useTheme()
    return (
        <Grid
            container
            padding={{ xs: 2, sm: 3, lg: 4 }}
        >
            <Grid
                item
                xs={12}
                width={'100%'}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                <Typography
                    variant="h2"
                    color={theme.palette.secondary.main}
                    fontWeight="bold"
                    fontSize={{ xs: 35, md: 60  }}
                    textAlign="center"
                    paddingBottom={5}
                >
                    Admissions Requirements
                </Typography>

            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                width={'100%'}
                paddingX={{xs: 2, sm: 3, lg: 13}}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                <Typography
                    variant="h2"
                    color={theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize={{ xs: 35, xl: 50 }}
                    textAlign="center"
                    paddingBottom={2}
                >
                    Masters Programs
                </Typography>
                <List>
                    <TextWithIcon  >
                        Hold a bachelor&apos;   s degree from a college or university (Provide copy of sealed transcripts).
                    </TextWithIcon>
                    <TextWithIcon  >
                        Submit a completed Admissions Application.
                    </TextWithIcon>
                    <TextWithIcon  >
                        Submit a One Time Application Fee: $100.00 (Non-Refundable).
                    </TextWithIcon>
                    <TextWithIcon  >
                        Submit an updated Resume.
                    </TextWithIcon>
                    <TextWithIcon  >
                        Submit 3 letters of professional references (non-family members).
                    </TextWithIcon>
                    <TextWithIcon  >
                        Submit a personal statement that describes the applicant&apos;s professional accomplishments and goals.
                    </TextWithIcon>
                    <TextWithIcon  >
                        Copy of valid government issued ID
                    </TextWithIcon>
                </List>

            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                paddingX={{xs: 2, sm: 3, lg: 13}}
                width={'100%'}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}>
                <Typography
                    variant="h2"
                    color={theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize={{ xs: 35, xl: 50 }}
                    textAlign="center"
                    paddingBottom={2}
                >
                    Undergraduate Programs
                </Typography>
                <List>
                    <TextWithIcon  >
                        Submit A High School Diploma, A GED or proof of post-secondary education.
                    </TextWithIcon>
                    <TextWithIcon  >
                        Submit A Completed Admissions Application.
                    </TextWithIcon>
                    <TextWithIcon  >
                        Submit a One Time Application Fee: $100.00 (Non-Refundable)
                    </TextWithIcon>
                    <TextWithIcon  >
                        Copy of Valid Government Issued ID
                    </TextWithIcon>
                </List>
            </Grid>

        </Grid>
    )
}
