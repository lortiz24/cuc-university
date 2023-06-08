import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import styles from './social-networks.module.css';
import { TikTokIcon } from '@/components/icons/TikTokIcon';



export const SocialNetworks = () => {
    //todo:agregar icono de tiktok
    return (
        <div className={styles.menu} style={{
        }}>
            <a className={styles.link} style={{ color: '#FFFFFF' }}>
                <FacebookOutlinedIcon className={`${styles['link-icon']}`} />
                {/* <span className={styles['link-title']}>Facebook</span> */}
            </a>
            <a className={styles.link} style={{ color: '#FFFFFF' }}>
                <i className={`${styles['link-icon']} fa fa-twitter`}> </i>
                {/* <span className={styles['link-title']}>Twitter</span> */}
            </a>
            <a className={styles.link} style={{ color: '#FFFFFF' }}>
                <i className={`${styles['link-icon']} fa fa-instagram`}> </i>
                {/* <span className={styles['link-title']}>Instagram</span> */}
            </a>
            <a className={styles.link} style={{ color: '#FFFFFF' }}>
                <i className={`${styles['link-icon']} fa fa-linkedin`}> </i>
                {/* <span className={styles['link-title']}>Linkedln</span> */}
            </a>
            <a className={styles.link} style={{ color: '#FFFFFF' }}>
                <i className={`${styles['link-icon']} fa fa-whatsapp`}> </i>
                {/* <span className={styles['link-title']}>Whatsapp</span> */}
            </a>
            <a className={styles.link} style={{ color: '#FFFFFF' }}>
                {/* <i className={`${styles['link-icon']} fa-brands fa-tiktok`}> </i> */}
                <TikTokIcon className={`${styles['link-icon']}`} />
                {/* <span className={styles['link-title']}>Whatsapp</span> */}
            </a>

            <a className={styles.link} style={{ color: '#FFFFFF' }}>
                <i className={`${styles['link-icon']} fa fa-youtube`}> </i>
                {/* <span className={styles['link-title']}>Youtube</span> */}
            </a>

        </div>
    )
}
