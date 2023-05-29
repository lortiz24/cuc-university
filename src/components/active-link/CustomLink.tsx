import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, useTheme, Menu, Grid, Typography } from '@mui/material';


interface Props {
    href: string;
    text: string;
    redirect: boolean;
    icon?: React.ReactNode
}


export const CustomLink = ({ href, text, redirect, icon }: Props) => {
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
                style={router.asPath === href ? { color: theme.palette.primary.main, textDecoration: 'none' } : { color: theme.palette.secondary.main, textDecoration: 'none' }}
            >{text}{icon}</Link>
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
            <Grid container alignItems="center">
                <Grid item>
                    <Typography variant="body1" style={{ color: theme.palette.secondary.main }}>
                        {text}
                    </Typography>
                </Grid>
                <Grid item>
                    {icon}
                </Grid>
            </Grid>
        </a>
    );
};