import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ActiveLink } from '../active-link/ActiveLink';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css'
import { navItems } from '@/data';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;




const origin = (typeof window === 'undefined') ? '' : window.location.origin;



export const NavbarUi = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const router = useRouter()

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
                            {navItems.map((menuItem) => (
                                <>
                                    <ActiveLink href={menuItem.path} text={menuItem.name} key={menuItem.name} />
                                </>
                            ))}
                        </nav>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>

    );
}