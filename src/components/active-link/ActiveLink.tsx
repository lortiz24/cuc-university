import React from 'react'
import { useTheme, Typography } from '@mui/material';
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
        // fontSize: '24px'
    }

    return (
        <div onClick={onClick} >
            {href === '/contact-us'
                ?
                <Link
                    href={href}
                    style={{ textDecoration: 'none' }}
                ><Typography
                    fontSize={{ xs: '16px', xl: '18px' }}
                    variant="body1"
                    sx={`/${router.asPath.split('/')[1]}` === href
                        ?
                        {
                            backgroundColor: theme.palette.primary.main, color: '#FFFFFF',
                            ...buttonCircleStyle,
                            fontSize:{ xs: '16px', xl: '18px'}
                        }
                        :
                        {
                            backgroundColor: theme.palette.secondary.main, color: '#ffffff',
                            ...buttonCircleStyle
                        }}>
                        {text}
                    </Typography></Link>
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