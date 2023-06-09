import React, { useState } from 'react';
import { ActiveLinkFooter } from '@/components/active-link/ActiveLinkFooter';
import { navItems, navItemsFooter } from '@/data';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../Navbar.module.css";
import { Box, MenuItem, Popover, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useGetBreakpoints } from '@/hooks/useGetBreakpoints';
import { useTranslation } from 'react-i18next';


interface Props {
    colorLink?: string;
}


export const MenuFooter = ({ colorLink }: Props) => {
    const {t} = useTranslation()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<null | number[]>(null); // Nuevo estado para los índices de submenús abiertos
    const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
    const router = useRouter();
    const { sm } = useGetBreakpoints()

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
        <Grid
            container
            component={'nav'}
            rowGap={3}
        >
            {(sm ? navItemsFooter : navItems).map((menuItem, menuIndex) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    display={'flex'}
                    justifyContent={{ xs: 'center', sm: 'flex-start' }}
                    key={menuItem.name}>
                    {menuItem.dropdown ? (
                        <div >
                            <ActiveLinkFooter
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
                        <ActiveLinkFooter text={t(menuItem.name)} href={menuItem.path} colorLink={colorLink} />
                    )}
                </Grid>
            ))}
        </Grid>
    )
}
