import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, useTheme, Menu } from '@mui/material';


interface Props {
    href: string;
    text: string;
    redirect: boolean;
}

export const CustomLink = ({ href, text, redirect }: Props) => {
    const router = useRouter()
    const theme = useTheme()

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (!redirect) {
            event.preventDefault();
        }
    };



    if (redirect) {
        return (
            <Link
                href={href}
                style={router.asPath === href ? { color: theme.palette.primary.main } : { color: theme.palette.secondary.main }}
            >{text}
            </Link>
        )
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            style={{
                color: theme.palette.secondary.main, 
                textDecoration: 'none',
                cursor: redirect ? 'pointer' : 'default',

            }}
        >
            {text}
        </a>
    );
};