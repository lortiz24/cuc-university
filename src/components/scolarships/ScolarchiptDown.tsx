import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ContentWithBackgrounImage } from '../ui/ContentWithBackgrounImage'

export const ScolarchiptDown = () => {
    return (
        <Grid
            container
            marginTop={{ xs: 3, md: 10, lg: 15 }}
        >
            <Grid
                item
                xs={12}
                lg={5}
            >
                <Typography
                    variant='body1'
                    color={(theme) => theme.palette.secondary.main}
                    fontSize={{ xs: 15, sm: 18 }}
                    style={{ marginBottom: '16px', lineHeight: '2' }}
                >
                    CUC University is committed to supporting eligible students through a
                    variety of scholarships, which are awarded on a semester basis and
                    renewable based on satisfactory academic progress. Upon completing the scholarship application, eligible candidates will be scheduled for an interview and asked to compose a 300-word essay on campus. The
                    essay topic will be randomly selected
                </Typography>
                <Typography
                    variant='body1'
                    color={(theme) => theme.palette.secondary.main}
                    fontSize={{ xs: 15, sm: 18 }}
                    style={{ marginBottom: '16px', lineHeight: '2' }}
                >
                    All students who receive CUC University scholarships must maintain a
                    3.0 GPA to remain eligible for renewal. Scholarship recipients are required to reaffirm their commitment to the scholarship terms by
                    signing the &apos;Terms for Institutional Scholarships&apos; form.
                </Typography>
                <Typography
                    variant='body1'
                    color={(theme) => theme.palette.primary.main}
                    fontSize={{ xs: 15, sm: 18 }}
                    sx={{ marginBottom: '16px', lineHeight: '2' }}
                >
                    Application deadlines for each semester will be posted on the university website. It is essential to note that upon withdrawal or failure of courses, recipients of institutional aid will forfeit the cUc University scholarship and become financially liable for the full tuition of the ongoing semester.

                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                lg={7}
                marginTop={{ xs: 2, md: 0 }}
                minHeight={{ xs: '300px', sm: '500px' }}>
                <ContentWithBackgrounImage
                    item1={`/assets/Alumna-4.png`}
                />
            </Grid>
        </Grid >
    )
}
