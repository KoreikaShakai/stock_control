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
import dayjs from "dayjs";

export function StockList({ isUpload }) {
  const [photos, setPhotos] = useState([]);

  const handleUpdate = () => {};

  const handleRemove = () => {};

  useEffect(() => {
    fetch(`/photos?user_id=${localStorage.getItem("user_id")}`)
      .then((res) => res.json())
      .then((res) => setPhotos((list) => res.data));
  }, [isUpload]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        marginTop: "16px",
        alignItems: "center",
      }}
    >
      {photos.map((ele) => {
        const dateTo = dayjs(ele.create_date);
        const dateFrom = dayjs();
        return (
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "center",
              backgroundColor: "whitesmoke",
            }}
            key={ele.create_date}
          >
            <CardMedia sx={{ height: 320 }} image={ele.url} />
            <CardContent>
              <Typography sx={{ fontSize: 20 }}>
                {dayjs(ele.create_date).format("YYYY年MM月DD日")}
              </Typography>
              <Typography sx={{ fontSize: 20 }}>
                {dateFrom.diff(dateTo, "day")}日経過
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <IconButton size="medium">
                <UpdateIcon fontSize="large" sx={{ color: "blue" }} />
              </IconButton>
              <IconButton size="medium">
                <DeleteIcon fontSize="large" sx={{ color: "red" }} />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}
