'use client';

import {useState} from "react";
import Link from 'next/link';
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon, ListItemText, Menu, MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {AccountCircle} from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';

const Header = () => {
  // 왼쪽 사이드바 상태값
  const [leftSideState, setLeftSideState] = useState(false)
  // 왼쪽 사이드바 열기 이벤트
  const leftSideOpen = () => {
    setLeftSideState(true)
  }
  // 왼쪽 사이트바 닫기 이벤트
  const leftSideClose = () => {
    setLeftSideState(false)
  }

  // 유저 네비 상태 값
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  // 유저 네비 열기 이벤트
  const anchorElNavOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }
  // 유저 네비 닫기 이벤트
  const anchorElNavClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(null);
  }

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
              onClick={anchorElNavOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={anchorElNavClose}
            >
              <MenuItem  onClick={anchorElNavClose}>
                <Typography textAlign="center">test</Typography>
              </MenuItem>
            </Menu>

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
              <Link href="/" passHref legacyBehavior>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="home" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link href="/about" passHref legacyBehavior>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="aaa" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>

    </>
  )
}

export default Header
