'use client';

import {useState} from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon, ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {AccountCircle} from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';

const Header = () => {
  const [leftSideState, setLeftSideState] = useState(false)
  const leftSideOpen = () => {
    setLeftSideState(true)
  }

  const leftSideClose = () => {
    setLeftSideState(false)
  }


  const navItems = ['Home', 'About', 'Contact'];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  return(
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={leftSideOpen}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ml: 'auto'}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* 왼쪽 네비 */}
      <Drawer
        anchor='left'
        open={leftSideState}
        onClose={leftSideClose}
      >
        <Box
          sx={{width: 250 }}
          role="presentation"
          onClick={leftSideClose}
          onKeyDown={leftSideClose}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="aaa" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

    </>
  )
}

export default Header
