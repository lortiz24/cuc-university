import React from 'react'
import { useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuItem from '@mui/material/MenuItem';
import { CustomLink } from './CustomLink';


interface IActiveLinkProps {
    text: string;
    href: string;
    redirect?: boolean;
    icon?: React.ReactNode
    onClick?: any
    cursorPointer?: boolean
    colorLink?: string;
}


export interface MenuItem {
    path: string;
    name: string;
    colorLink?: string;
}



export const ActiveLink = ({ text, href, redirect = true, icon, onClick, cursorPointer = true, colorLink }: IActiveLinkProps) => {
    const router = useRouter()
    const theme = useTheme()


    const buttonCircleStyle: React.CSSProperties = {
        borderRadius: '40rem',
        padding: '4px 15px',
        textDecoration: 'none',
    }

    return (
        <div onClick={onClick} >
            {href === '/contact-us'
                ?
                <Link
                    style={
                        router.asPath === href ?
                            { backgroundColor: theme.palette.primary.main, color: '#FFFFFF', ...buttonCircleStyle }
                            :
                            { backgroundColor: theme.palette.secondary.main, color: '#ffffff', ...buttonCircleStyle }}
                    href={href} >{text}{icon}</Link>
                :
                <CustomLink
                    href={href}
                    redirect={redirect}
                    text={text}
                    icon={icon}
                    cursorPointer={cursorPointer}
                />
            }

        </div>
    )
}