import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, useTheme, Menu, Grid, Typography } from '@mui/material';


interface Props {
    href: string;
    text: string;
    redirect: boolean;
    icon?: React.ReactNode,
    cursorPointer?: boolean
    colorLink?: string;
}


export const CustomLink = ({ href, text, redirect, icon, cursorPointer, colorLink }: Props) => {
    const router = useRouter()
    const theme = useTheme()

    const handleClickWithouRedirect = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (!redirect) {
            event.preventDefault();
        }
    };
    const handleClickWithRedirect = (event: React.MouseEvent<HTMLAnchorElement>) => {
        router.push(href)
    };


    /* 
        if (redirect) {
            return (
               
            )
        } */

    return (
        <Link
            onClick={redirect ? handleClickWithRedirect : handleClickWithouRedirect}
            href={href}
            style={router.asPath === href
                ?
                { color: theme.palette.primary.main, textDecoration: 'none' }
                :
                { color: colorLink ? colorLink : theme.palette.secondary.main, textDecoration: 'none' }}
        ><Grid container alignItems="center">
                <Grid item>
                    <Typography variant="body1" style={router.asPath === href
                        ?
                        { color: theme.palette.primary.main, textDecoration: 'none' }
                        :
                        { color: colorLink ? colorLink : theme.palette.secondary.main, textDecoration: 'none' }}>
                        {text}
                    </Typography>
                </Grid>
                <Grid item>
                    {icon}
                </Grid>
            </Grid>
        </Link>

    );
};