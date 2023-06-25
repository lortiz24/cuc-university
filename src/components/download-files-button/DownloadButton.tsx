import React from 'react';
import { Button } from '@mui/material';
import { DownloadItem } from '@/interfaces';
import { useTranslation } from 'react-i18next';

interface Props {
    downloadnItem: DownloadItem;
}

const DownloadButton = ({ downloadnItem }: Props) => {
    const { t } = useTranslation()
    const handleDownload = () => {
        const filePath = downloadnItem.ruta; // Ruta relativa al archivo en la carpeta "public"
        const downloadLink = document.createElement('a');
        downloadLink.href = filePath;
        downloadLink.download = downloadnItem.name;
        downloadLink.click();
    };

    return (
        <Button
            variant="contained"
            color='secondary'
            sx={{
                borderRadius: 30,
                textDecoration: 'none',
                textTransform: 'none',
                fontSize: 18,
                color: '#FFFFF',
                paddingX: 5,
                marginTop: 4
            }}
            onClick={handleDownload}
        >
            {t('programs.pdf-button')}
        </Button>
    );
};

export default DownloadButton;