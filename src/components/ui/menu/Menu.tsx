import React, { useState } from 'react';
import { ActiveLink } from '@/components/active-link/ActiveLink';
import { navItems } from '@/data';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../Navbar.module.css";
import { Box, MenuItem, Popover } from '@mui/material';
import { useRouter } from 'next/router';
import { ChangeLenguage } from '@/components/change-lenguage/ChangeLenguage';
import { useTranslation } from 'react-i18next';



interface Props {
    colorLink?: string;
}
export const Menu = ({ colorLink }: Props) => {

    const { t } = useTranslation()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<null | number[]>(null); // Nuevo estado para los índices de submenús abiertos
    const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
    const router = useRouter();


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };


    const handleMenuOpen = (event: React.MouseEvent<HTMLLIElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>, menuIndex: number, subMenuIndex: number) => {
        if (subMenuIndex === 0) {
            setAnchorEl(event.currentTarget);
            setOpenSubMenuIndex([menuIndex, subMenuIndex]);
        } else {
            setAnchorEl2(event.currentTarget);
            setOpenSubMenuIndex([menuIndex, subMenuIndex]);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenSubMenuIndex(null); // Restablecer los índices de los submenús abiertos
    };


    return (
        <Box component={'nav'} className={"menu-container"} >
            {navItems.map((menuItem, menuIndex) => (
                <React.Fragment key={menuItem.name}>
                    {menuItem.dropdown ? (
                        <div >
                            <ActiveLink
                                colorLink={colorLink}
                                href={menuItem.path}
                                text={t(menuItem.name)}
                                redirect={false}
                                icon={<ExpandMoreIcon className={styles["expand-icon"]} />}
                                onClick={handleClick}
                            />
                            <Popover
                                open={Boolean(anchorEl)}
                                anchorEl={anchorEl}
                                onClose={handleMenuClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                            >
                                <Box sx={{ minWidth: "200px" }}>
                                    {menuItem.dropdown?.map((subMenu, subMenuIndex) => (
                                        <div key={subMenu.name}>
                                            <MenuItem
                                                onClick={(event) =>
                                                    handleMenuOpen(event, menuIndex, subMenuIndex + 1)
                                                }
                                                sx={{ width: "100%" }}
                                            >
                                                {t(subMenu.name)}
                                                <ExpandMoreIcon className={styles["expand-icon"]} />
                                            </MenuItem>
                                            {openSubMenuIndex?.[0] === menuIndex &&
                                                openSubMenuIndex?.[1] === subMenuIndex + 1 && (
                                                    <Popover
                                                        open={Boolean(anchorEl2)}
                                                        anchorEl={anchorEl2}
                                                        onClose={handleMenuClose}
                                                        anchorOrigin={{
                                                            vertical: "bottom",
                                                            horizontal: "left",
                                                        }}
                                                        transformOrigin={{
                                                            vertical: "top",
                                                            horizontal: "left",
                                                        }}
                                                    >
                                                        <Box sx={{ minWidth: "200px" }}>
                                                            {subMenu.dropdown?.map((subItem) => (
                                                                <MenuItem
                                                                    key={subItem.name}
                                                                    onClick={() => {
                                                                        handleMenuClose();
                                                                        router.push(menuItem.path + subItem.path);
                                                                    }}
                                                                    sx={{ width: "100%" }}
                                                                >
                                                                    {t(subItem.name)}
                                                                </MenuItem>
                                                            ))}
                                                        </Box>
                                                    </Popover>
                                                )}
                                        </div>
                                    ))}
                                </Box>
                            </Popover>
                        </div>
                    ) : (
                        <ActiveLink text={t(menuItem.name)} href={menuItem.path} colorLink={colorLink} />
                    )}
                </React.Fragment>
            ))}
            <ChangeLenguage />
        </Box>
    )
}
