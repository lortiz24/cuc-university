import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme, Grid, Typography } from '@mui/material';


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

    const commonCss: React.CSSProperties = {
        textDecoration: 'none',
        fontSize: theme.typography.fontSize,
    };

    // Establecer diferentes tamaños de letra según los breakpoints
    theme.typography.h2.fontSize = '24px'; // xl
    theme.typography.h3.fontSize = '20px'; // lg
    theme.typography.body1.fontSize = '16px'; // md, sm, xs



    return (
        <Link
            onClick={redirect ? handleClickWithRedirect : handleClickWithouRedirect}
            href={href}
            style={`/${router.asPath.split('/')[1]}` === href
                ?
                {
                    color: theme.palette.primary.main,
                    ...commonCss
                }
                :
                {
                    color: colorLink ? colorLink : theme.palette.secondary.main,
                    ...commonCss
                }}
        ><Grid container alignItems="center">
                <Grid item>
                    <Typography
                        fontSize={16.5}
                        variant="body1"
                        style={`/${router.asPath.split('/')[1]}` === href
                            ?
                            {
                                color: theme.palette.primary.main,
                                ...commonCss
                            }
                            :
                            {
                                color: colorLink ? colorLink : theme.palette.secondary.main,
                                ...commonCss
                            }}>
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