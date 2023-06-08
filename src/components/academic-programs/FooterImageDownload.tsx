import { Box, Typography } from '@mui/material'
import DownloadButton from '../download-files-button/DownloadButton';
import { DownloadItem } from '@/interfaces';

interface Props {
    downloadnItem: DownloadItem;

}


const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const FooterImageDownload = ({
    downloadnItem
}: Props) => {

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={'100%'}
            marginY={10}
        >
            <Typography
                variant='caption'
                lineHeight={1.2}
                color={(theme) => theme.palette.secondary.main}
                fontSize={{ xs: 20, sm: 20, xl: 20 }}
                paddingX={10}
                textAlign={'center'}
            >
                Study Plan and Course Catalogue
            </Typography>

            <DownloadButton downloadnItem={downloadnItem} />
        </Box>

    )
}
{/* <Grid
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
        xs={12}
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
                paddingX: 5
            }}
        >
            Download
        </Button>
    </Grid>
</Grid >  */}