import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import styles from './social-networks.module.css';
import { useTheme, } from '@mui/material';



export const SocialNetworks = () => {
    const theme = useTheme()
    return (
        <div className={styles.menu} style={{
            backgroundColor: theme.palette.secondary.main
        }}>
            <a className={styles.link} style={{ color: theme.palette.primary.main }}>
                <FacebookOutlinedIcon className={`${styles['link-icon']}`}/>
                <span className={styles['link-title']}>Facebook</span>
            </a>
            <a className={styles.link} style={{ color: theme.palette.primary.main }}>
                <i className={`${styles['link-icon']} fa fa-twitter`}> </i>
                <span className={styles['link-title']}>Twitter</span>
            </a>
            <a className={styles.link} style={{ color: theme.palette.primary.main }}>
                <i className={`${styles['link-icon']} fa fa-instagram`}> </i>
                <span className={styles['link-title']}>Instagram</span>
            </a>
            <a className={styles.link} style={{ color: theme.palette.primary.main }}>
                <i className={`${styles['link-icon']} fa fa-linkedin`}> </i>
                <span className={styles['link-title']}>Linkedln</span>
            </a>
            <a className={styles.link} style={{ color: theme.palette.primary.main }}>
                <i className={`${styles['link-icon']} fa fa-whatsapp`}> </i>
                <span className={styles['link-title']}>Whatsapp</span>
            </a>
            {/* <a className={styles.link} style={{ color: theme.palette.primary.main }}>
                <i className={`${styles['link-icon']} fab fa-tiktok`}> </i>
                <span className={styles['link-title']}>TikTok</span>
            </a> */}
            <a className={styles.link} style={{ color: theme.palette.primary.main }}>
                <i className={`${styles['link-icon']} fa fa-youtube`}> </i>
                <span className={styles['link-title']}>Youtube</span>
            </a>

        </div>
    )
}
