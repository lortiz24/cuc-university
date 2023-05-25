import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import { ActiveLink } from '../active-link/ActiveLink';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

export interface MenuItem {
    path: string;
    name: string;
    dropdown?: MenuItem[];
}
const navItems: MenuItem[] = [
    {
        path: '/',
        name: 'Home'
    },
    {
        name: 'About Us',
        path: '/about-us'
    },
    {
        name: 'Academic Programs',
        path: '/academic-programs',
        dropdown: [
            {
              name: 'Undergraduate Programs',
              path: '/program-1',
            },
            {
              name: 'Graduate Programs',
              path: '/program-2',
            },
          ],
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


const origin = (typeof window === 'undefined') ? '' : window.location.origin;



export const NavbarUi = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState("");
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const router = useRouter()

    const toggleDropdown = (item:string) => {
        setShowDropdown(!showDropdown);
        setSelectedItem(item);
      };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Cuc University
            </Typography>
            <Divider />
            <List>
                {navItems.map((menuitem) => (
                    <ListItem key={menuitem.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => router.push(menuitem.path)}>
                            <ActiveLink text={menuitem.name} href={menuitem.path} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar
                position='static'
                sx={{

                    marginTop: { xs: 4, md: 4 },
                    marginBottom: { xs: 4, md: 4 },
                    paddingX: { xs: 4, md: 10 },
                }}
                component={'nav'}
                elevation={0}
                color='transparent'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ flexGrow: 1 }}>
                        <Box
                            component={'img'}
                            sx={{
                                maxHeight: { xs: 200, md: 167 },
                                maxWidth: { xs: 300, md: 250 },
                                display: { xs: 'none', lg: 'block' }
                            }}
                            alt="The house from the offer."
                            src={`${origin}/assets/9744a3a642b478781df6cd9b3dde8724.png`} />
                    </div>

                    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <nav className={styles['menu-container']} >
                            {
                                navItems.map((menuItem) => (
                                    <React.Fragment key={menuItem.name}>
                                        {menuItem.dropdown ? (
                                            <div className="dropdown-container">
                                                <button
                                                    className={`dropdown-button ${selectedItem === menuItem.path ? 'active' : ''}`}
                                                    onClick={() => toggleDropdown(menuItem.path)}
                                                >
                                                    {menuItem.name}
                                                </button>
                                                {showDropdown && selectedItem === menuItem.path && (
                                                    <div className="dropdown-menu">
                                                        {menuItem.dropdown.map((item) => (
                                                            <a href={item.path} key={item.name}>{item.name}</a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <ActiveLink
                                                text={menuItem.name}
                                                href={menuItem.path}
                                            />
                                        )}
                                    </React.Fragment>
                                ))
                            }
                        </nav>
                    </Box>
                </Toolbar>
            </AppBar>

        </>

    );
}