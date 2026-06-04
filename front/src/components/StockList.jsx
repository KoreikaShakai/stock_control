import { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";

export function StockList() {
  const [photos, setPhotos] = useState([]);

  const handleUpdate = () => {};

  const handleRemove = () => {};

  useEffect(() => {
    fetch(`/photos`)
      .then((res) => res.json())
      .then((res) => setPhotos((list) => res.photos));
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 0.3fr)",
        marginTop: "16px",
      }}
    >
      {photos.map((ele) => (
        <Card sx={{ maxWidth: 345, textAlign: "center", margin: 24 }}>
          <CardMedia sx={{ height: 320 }} image={ele.url} />
          <CardContent>
            <Typography variant="body1">登録日</Typography>
            <Typography variant="body1">経過日数</Typography>
          </CardContent>
          <CardActions>
            <IconButton size="medium">
              <UpdateIcon fontSize="large" sx={{ color: "blue" }} />
            </IconButton>
            <IconButton size="medium">
              <DeleteIcon fontSize="large" sx={{ color: "red" }} />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
