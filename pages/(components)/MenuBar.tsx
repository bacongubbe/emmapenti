import React from "react";
import { useState } from "react";
import { Drawer, Box, IconButton, Icon, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        aria-label="logo"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" 
        open={isOpen} 
        onClose={() => setIsOpen(false)}>
        <Box width='33vw'>
            <h3>Emma Penti</h3>
            <ul>
            <li><Link href='/' >Home</Link></li>
            <li><Link href='/about' >About</Link></li>
            </ul>
        </Box>
      </Drawer>
    </>
  );
};

export default MenuBar;
