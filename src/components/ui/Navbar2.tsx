import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ActiveLink } from "../active-link/ActiveLink";
import { Divider, Drawer, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";

interface Props {
  window?: () => Window;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export interface SubMenuItem {
  path: string;
  name: string;
}

export interface MenuItem {
  path?: string;
  name: string;
  sub_dropdown?: SubMenuItem[];
  dropdown?: MenuItem[];
}

const navItems: MenuItem[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Academic Programs",
    path: "/academic-programs",
    dropdown: [
      {
        name: "Undergraduate Programs",
        sub_dropdown: [{
          name: "Associates of Science in International Business Administration",
          path: "/Associates_of_Science_in_International_Business_Administration"
        },
        {
          name: "Bachelors of Science in International Business Administration",
          path: "/Bachelors_of_Science_in_International_Business_Administration"
        },
        ]
      },
      {
        name: "Graduate Programs",
        sub_dropdown: [{
          name: "Master of Science in International Business Administration",
          path: "/Master_of_Science_in_International_Business_Administration"
        },
        {
          name: "Master of Science in Marketing",
          path: "/Master_of_Science_in_Marketing"
        },
        {
          name: "Master of Science in Mass Media Communication and Media Technology",
          path: "/Master_of_Science_in_Mass_Media_Communication_and_Media_Technology"
        },
        ]
      },
    ],
  },
  {
    name: "Students",
    path: "/students",
  },
  {
    name: "Scholarships",
    path: "/scholarships",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export const NavbarUi = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [openSubMenuIndex, setOpenSubMenuIndex] = React.useState<null | number[]>(null); // Nuevo estado para los índices de submenús abiertos

  const router = useRouter();
  const theme = useTheme()


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, menuIndex: number, subMenuIndex: number) => {
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }}>
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 200, md: 167 },
                maxWidth: { xs: 300, md: 250 },
                display: { xs: "none", lg: "block" },
              }}
              alt="The house from the offer."
              src={`${origin}/assets/9744a3a642b478781df6cd9b3dde8724.png`}
            />
          </div>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <nav className={"menu-container"}>
              {navItems.map((menuItem, menuIndex) => (
                <React.Fragment key={menuItem.name}>
                  {menuItem.dropdown ? (
                    <div
                      onMouseLeave={handleMenuClose}
                      style={{ position: "relative" }}
                    >
                      <button
                        onMouseEnter={(event) =>
                          handleMenuOpen(event, menuIndex, 0)
                        }
                        className={"nav-item-button"}
                      >
                        {menuItem.name}
                        <ExpandMoreIcon className={styles["expand-icon"]} />
                      </button>
                      <Popover
                        open={Boolean(anchorEl) && openSubMenuIndex?.[0] === menuIndex}
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
                          {menuItem.dropdown.map((subMenu, subMenuIndex) => (
                            <div key={subMenu.name}>
                              <MenuItem
                                onClick={(event) =>
                                  handleMenuOpen(event, menuIndex, subMenuIndex + 1)
                                }
                                sx={{ width: "100%" }}
                              >
                                {subMenu.name}
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
                                      {subMenu.sub_dropdown?.map((subItem) => (
                                        <MenuItem
                                          key={subItem.name}
                                          onClick={() => {
                                            handleMenuClose();
                                            router.push(subItem.path);
                                          }}
                                          sx={{ width: "100%" }}
                                        >
                                          {subItem.name}
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
                    <ActiveLink text={menuItem.name} href={menuItem.path} />
                  )}
                </React.Fragment>
              ))}
            </nav>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant='temporary'
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
      >
        <Typography
          variant='h2'
          color={theme.palette.primary.main}
          fontWeight="bold"
          fontSize={{ xs: 20, sm: 35 }}
          marginBottom={{ xs: 1, md: 2 }}
          style={{ textAlign: 'center' }}
        >
          CUC University
        </Typography>
        <Divider />

        <List>
          {navItems.map((menuItem) => (
            <React.Fragment key={menuItem.name}>
              {menuItem.dropdown ? (
                <>
                  <ListItem button onClick={handleMenuOpen}>
                    <ListItemText primary={menuItem.name} />
                    <ExpandMoreIcon />
                  </ListItem>
                  <Popover
                    open={Boolean(anchorEl) && anchorEl === menuItem.name}
                    anchorEl={anchorEl}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    {/* ... */}
                  </Popover>
                </>
              ) : (
                <ListItem button>
                  <ActiveLink text={menuItem.name} href={menuItem.path} />
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>

    </>
  );
};
