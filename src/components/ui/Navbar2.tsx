import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Divider, Drawer, Typography, useTheme } from "@mui/material";
import { MenuDrawer } from "./menu-drawer/MenuDrawer";
import { Menu } from "./menu/Menu";
import { ChangeLenguage } from "../change-lenguage/ChangeLenguage";

interface Props {
  window?: () => Window;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;


export const NavbarUi = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const theme = useTheme()


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
          paddingX: { xs: 4, md: 6, xl: 10 },
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
                marginTop: 2.5,
                marginLeft: { xs: 0, xl: 4 }
              }}
              alt="The house from the offer."
              src={`/assets/MainLogo2.png`}
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
        <Box sx={{
          position: 'absolute',
          bottom: 40,
          right: 40,
        }}>
          <ChangeLenguage />
        </Box>
      </Drawer>

    </>
  );
};
