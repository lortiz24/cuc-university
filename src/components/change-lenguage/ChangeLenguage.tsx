import React, { useState, useEffect } from 'react'
import { Box, Button, Menu, MenuItem, useTheme, Typography } from '@mui/material'
import Image from 'next/image';
import { Language } from '@/interfaces/language.interface';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { changeLanguageSlice } from '@/store/language';
import { LANGUAGES } from '@/constants/Languages';
import { useTranslation } from 'react-i18next';

const sizeFlag = 20

const flagLanguage = {
    es: <Image src="/assets/spain.png" width={sizeFlag} height={sizeFlag} alt='eeuu-flag' />,
    en: <Image src="/assets/eeuu.png" width={sizeFlag} height={sizeFlag} alt='eeuu-flag' />
}


export const ChangeLenguage = () => {

    const { i18n } = useTranslation()
    const [flagSelected, setflagSelected] = useState(flagLanguage.en)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const theme = useTheme()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const { languageSelected } = useAppSelector(select => select.language)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setflagSelected(flagLanguage[languageSelected])
        console.log(languageSelected)
    }, [languageSelected])

    const handleClose = (language: Language) => {
        if (typeof language === 'string') {
            setflagSelected(flagLanguage[language])
            dispatch(changeLanguageSlice(language))
            i18n.changeLanguage(language)
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
                    {flagSelected} <Typography color="initial">{languageSelected.toUpperCase()}</Typography>
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
                {
                    LANGUAGES.map((language) => (
                        <MenuItem key={language.code} onClick={() => handleClose(language.code)} >
                            <Box display={'flex'} flexWrap={'wrap'} gap={1} alignItems={'center'}>
                                {flagLanguage[language.code]} <Typography color="initial">{language.label}</Typography>
                            </Box>
                        </MenuItem>
                    ))
                }
            </Menu>
        </div>
    )
}
