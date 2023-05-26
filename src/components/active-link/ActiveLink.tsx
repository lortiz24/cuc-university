import React from 'react'
import { Button, useTheme, Menu } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuItem from '@mui/material/MenuItem';


interface IActiveLinkProps {
    text: string;
    href: string
}


export interface MenuItem {
    path: string;
    name: string;
}


const navItems: MenuItem[] = [
    {
        path: '/graduate-programs',
        name: 'Graduate Programs'
    },
    {
        name: 'Undergraduate Programs',
        path: '/undergraduate-programs'
    },
    {
        name: 'Academic Programs',
        path: '/academic-programs'
    },
    {
        name: 'Students',
        path: '/students'
    },
    {
        name: 'Scholarships',
        path: '/scholarships'
    },
    {
        name: 'Contact Us',
        path: '/contact-us'
    }
];


export const ActiveLink = ({ text, href }: IActiveLinkProps) => {
    const router = useRouter()
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const buttonCircleStyle: React.CSSProperties = {
        borderRadius: '40rem',
        padding: '4px 15px'
    }




    const handleClose = () => {
        setAnchorEl(null);
    };


    if (href === '/academic-programs') {
        return (
            <Link style={router.asPath === href ? { color: theme.palette.primary.main } : { color: theme.palette.secondary.main }} href={href} >{text}</Link>
        )
    }
    return (
        <>
            {href === '/contact-us'
                ?
                <Link
                    style={
                        router.asPath === href ? { backgroundColor: theme.palette.primary.main, ...buttonCircleStyle } : { backgroundColor: theme.palette.secondary.main, color: '#ffffff', ...buttonCircleStyle }}
                    href={href} >{text}</Link>

                :
                <Link style={router.asPath === href ? { color: theme.palette.primary.main } : { color: theme.palette.secondary.main }} href={href} >{text}</Link>
            }

        </>
    )
}