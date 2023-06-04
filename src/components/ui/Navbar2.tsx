import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import { ActiveLink } from "../active-link/ActiveLink";
import { Divider, Drawer, Typography, useTheme } from "@mui/material";
import { navItems } from "@/data";
import { MenuDrawer } from "./menu-drawer/MenuDrawer";
import { Menu } from "./menu/Menu";

interface Props {
  window?: () => Window;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;


export const NavbarUi = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openSubMenuIndex, setOpenSubMenuIndex] = React.useState<null | number[]>(null); // Nuevo estado para los índices de submenús abiertos
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const router = useRouter();
  const theme = useTheme()


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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


  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        position="static"
        sx={{
          marginTop: { xs: 4, md: 4 },
          marginBottom: { xs: 4, md: 4 },
          paddingX: { xs: 4, md: 10 },
        }}
        component="nav"
        elevation={0}
        color="transparent"
      >
        <Toolbar>

          <div style={{ flexGrow: 1 }}>
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 200, md: 167 },
                maxWidth: { xs: '100%', sm: 250, md: 250 },
              }}
              alt="The house from the offer."
              src={`${origin}/assets/MainLogo2.png`}
            />
          </div>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Menu />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: 280,
          '& .MuiDrawer-paper': {
            width: 280,
            padding: '16px',
            backgroundColor: '#f1f1f1',
          },
        }}
        anchor="right" // Establece el anchor en "right"
      >
        <Typography
          variant='h2'
          color={theme.palette.primary.main}
          fontWeight="bold"
          fontSize={{ xs: 20, md: 35 }}
          marginBottom={{ xs: 1, md: 2 }}
          style={{ textAlign: 'center' }}
        >
          CUC University
        </Typography>
        <Divider />

        <MenuDrawer mobileOpen={mobileOpen} />
      </Drawer>

    </>
  );
};
