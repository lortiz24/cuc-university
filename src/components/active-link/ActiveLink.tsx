import React from 'react'
import { Button, useTheme, Menu } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuItem from '@mui/material/MenuItem';
import { CustomLink } from './CustomLink';


interface IActiveLinkProps {
    text: string;
    href: string;
    redirect?: boolean;
    icon?: React.ReactNode

}


export interface MenuItem {
    path: string;
    name: string;
}



export const ActiveLink = ({ text, href, redirect = true, icon }: IActiveLinkProps) => {
    const router = useRouter()
    const theme = useTheme()


    const buttonCircleStyle: React.CSSProperties = {
        borderRadius: '40rem',
        padding: '4px 15px',
        textDecoration: 'none'
    }

    return (
        <>
            {href === '/contact-us'
                ?
                <Link
                    style={
                        router.asPath === href ? { backgroundColor: theme.palette.primary.main, color: '#FFFFFF', ...buttonCircleStyle } : { backgroundColor: theme.palette.secondary.main, color: '#ffffff', ...buttonCircleStyle }}
                    href={href} >{text}{icon}</Link>

                :
                <CustomLink
                    href={href}
                    redirect={redirect}
                    text={text}
                    icon={icon}
                />
            }

        </>
    )
}