import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { logout } from "./../utils/auth";

export default function DropDown() {
  const [menu, setMenu] = useState(null);
  const open = Boolean(menu);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <IconButton onClick={handleMenu} style={{ color: "white" }}>
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={menu}
        open={open}
        onClose={handleMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
