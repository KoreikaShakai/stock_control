import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { CameraModal } from "./CameraModal";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useAtom } from "jotai";
import { atomOpen } from "./header/atoms";

export function Header() {
  const [open, setOpen] = useAtom(atomOpen);

  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center" }}>
      <AppBar position="static" sx={{ backgroundColor: "#6091d3" }}>
        <CameraModal />
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            aria-label="logout"
            sx={{ mr: 2, backgroundColor: "white" }}
            onClick={async () => {
              await fetch("/api/firebase/signOut");
              navigate("/");
            }}
          >
            <LogoutIcon fontSize="large" sx={{ color: "red" }} />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: '"Londrina Shadow", cursive',
              fontSize: "60px",
            }}
          >
            Stock Control
          </Typography>
          <IconButton
            size="medium"
            edge="start"
            color="success"
            aria-label="logout"
            sx={{ mr: 2, backgroundColor: "white" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <PlaylistAddIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
