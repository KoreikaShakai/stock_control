import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { CameraModal } from "./CameraModal";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export function Header({ open, setOpen }) {
  const handleOpen = () => setOpen((is) => true);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetch("/api/firebase/signOut");
    navigate("/");
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <AppBar position="static" sx={{ backgroundColor: "tomato" }}>
        <CameraModal />
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            aria-label="logout"
            sx={{ mr: 2, backgroundColor: "white" }}
            onClick={handleLogout}
          >
            <LogoutIcon fontSize="large" sx={{ color: "red" }} />
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            日用品ストック
          </Typography>
          <IconButton
            size="medium"
            edge="start"
            color="success"
            aria-label="logout"
            sx={{ mr: 2, backgroundColor: "white" }}
            onClick={handleOpen}
          >
            <PlaylistAddIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
