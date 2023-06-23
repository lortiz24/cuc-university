import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { navItems } from '@/data';
import { CollapseMenuHeader } from './CollapseMenuHeader';
import { ActiveLink } from '@/components/active-link/ActiveLink';
import { Divider } from '@mui/material';
import { useRouter } from 'next/router';
import { ChangeLenguage } from '@/components/change-lenguage/ChangeLenguage';
import { useTranslation } from 'react-i18next';

interface Props {
    mobileOpen: boolean
}

export const MenuDrawer = ({ mobileOpen }: Props) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation()
    const router = useRouter()
    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (!mobileOpen) {
            setOpen(false)
        }

    }, [mobileOpen])

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {navItems.map((menu, index) => {

                if (menu.dropdown) {
                    return (
                        <div key={menu.path + index}>
                            <ListItemButton onClick={handleClick} >
                                <ListItemIcon>
                                    {menu.icon}
                                </ListItemIcon>
                                <ActiveLink href={menu.path} text={t(menu.name)} key={index} redirect={false} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {
                                        menu.dropdown.map((subMenu, index) => {

                                            if (!subMenu.dropdown) {
                                                return <></>
                                            }
                                            return (
                                                <>
                                                    <List component="nav"
                                                        aria-labelledby="nested-list-subheader"
                                                        key={subMenu.name}>
                                                        <CollapseMenuHeader primary={t(subMenu.name)}>
                                                            {
                                                                subMenu.dropdown.map((program, inedx) => {
                                                                    return (
                                                                        <div key={menu.path + index}>
                                                                            <ListItemButton >
                                                                                <ActiveLink href={menu.path + program.path} text={t(program.name)} />
                                                                            </ListItemButton>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </CollapseMenuHeader>
                                                    </List>
                                                    {menu.dropdown?.length !== index + 1 && <Divider />}
                                                </>
                                            )
                                        })
                                    }

                                </List>
                            </Collapse>
                        </div>)
                }
                return (
                    <ListItemButton key={menu.path} onClick={() => router.push(menu.path)}>
                        <ListItemIcon>
                            {menu.icon}
                        </ListItemIcon>
                        <ActiveLink href={menu.path} text={t(menu.name)} key={index} redirect={false} />
                    </ListItemButton>
                )
            })}
        </List>
    )
}
