import React from 'react'
import { Button, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
interface IActiveLinkProps {
    text: string;
    href: string
}

export const ActiveLink = ({ text, href }: IActiveLinkProps) => {
    const router = useRouter()
    const theme = useTheme()


    const buttonCircleStyle: React.CSSProperties = {
        borderRadius: '40rem',
        backgroundColor: theme.palette.secondary.main,
        color:'#ffffff'
    }
    return (
        <>
            {href === '/contact-us'
                ?
                <Button
                    color="primary"
                    style={
                        router.asPath === href ? { color: theme.palette.primary.main, ...buttonCircleStyle } : { color: theme.palette.secondary.main, ...buttonCircleStyle }}
                >
                    <Link href={href} >{text}</Link>
                </Button>
                :
                <Button style={router.asPath === href ? { color: theme.palette.primary.main } : { color: theme.palette.secondary.main }}>
                    <Link href={href} >{text}</Link>
                </Button>}

        </>
    )
}
