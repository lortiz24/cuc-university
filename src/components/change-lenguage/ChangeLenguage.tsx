import { Box, Button, Menu, MenuItem, useTheme, Typography } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image';
import { Language } from '@/interfaces/language.interface';

const sizeFlag = 20

const flagLanguage = {
    es: <Image src="/assets/spain.png" width={sizeFlag} height={sizeFlag} alt='eeuu-flag' />,
    en: <Image src="/assets/eeuu.png" width={sizeFlag} height={sizeFlag} alt='eeuu-flag' />
}

export const ChangeLenguage = () => {
    const [flagSelected, setflagSelected] = useState(flagLanguage.en)
    const [languageSelected, setlanguageSelected] = useState('EN')
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const theme = useTheme()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (language: Language) => {
        if (typeof language === 'string') {
            setflagSelected(flagLanguage[language])
            setlanguageSelected(language.toUpperCase())
        }
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    fontSize: { xs: '16px', xl: '18px' },
                    textTransform: 'none',
                    color: theme.palette.secondary.main,
                }}
            >
                <Box display={'flex'} flexWrap={'wrap'} gap={1} alignItems={'center'}>
                    {flagSelected} <Typography color="initial">{languageSelected}</Typography>
                </Box>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleClose('es')} >
                    <Box display={'flex'} flexWrap={'wrap'} gap={1} alignItems={'center'}>
                        {flagLanguage.es} <Typography color="initial">Spanish</Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={() => handleClose('en')}>
                    <Box display={'flex'} flexWrap={'wrap'} gap={1} alignItems={'center'}>
                        {flagLanguage.en} <Typography color="initial">English</Typography>
                    </Box>
                </MenuItem>
            </Menu>
        </div>
    )
}
