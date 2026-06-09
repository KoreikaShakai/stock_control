import { useState, useEffect, useRef } from "react";
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
import { RakutenRate } from "./stock/RakuteRate";

export function StockList({ isUpload, setIsUpload }) {
  // ログインされていなければ戻す？

  const [rakutenView, setRakutenView] = useState(-1);
  const [photos, setPhotos] = useState([]);
  const refCard = useRef("");

  const handleUpdate = async (event) => {
    const req = {
      id: event.target.parentNode.parentNode.parentNode.id,
    };
    if (req.id === "") return;
    await fetch("/update_photos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    setIsUpload((is) => !is);
  };

  const handleRemove = async (event) => {
    const req = {
      id: event.target.parentNode.parentNode.parentNode.parentNode.id,
    };
    if (req.id === "") return;
    await fetch("/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    setIsUpload((is) => !is);
  };

  useEffect(() => {
    (async () => {
      const reqUser = await fetch("/api/firebase/authUser");
      const userJson = await reqUser.json();
      const reqData = await fetch(`/photos?user_id=${userJson.uid}`);
      const dataJson = await reqData.json();
      setPhotos((list) => dataJson.data);
    })();
  }, [isUpload]);

  return (
    <Box
      sx={{
        // display: "grid",
        // gridTemplateColumns: "repeat(4, 1fr)",
        display: "flex",
        margin: "10px",
        // marginTop: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {photos.map((ele, ind) => {
        const dateTo = dayjs(ele.create_date);
        const dateFrom = dayjs();
        if (rakutenView === ind) {
          return (
            <Card
              sx={{
                // maxWidth: 345,
                maxWidth: 690,
                textAlign: "center",
                backgroundColor: "whitesmoke",
                marginBottom: 4,
                display: "flex",
              }}
              key={ele.create_date}
              id={ele.id}
            >
              <Card sx={{ width: 345, flex: "auto" }}>
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
                  <IconButton size="small">
                    <UpdateIcon
                      fontSize="large"
                      sx={{ color: "blue" }}
                      onClick={handleUpdate}
                    />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon
                      fontSize="large"
                      sx={{ color: "red" }}
                      onClick={handleRemove}
                    />
                  </IconButton>
                  <button
                    onClick={() => {
                      setRakutenView(-1);
                    }}
                  >
                    楽天
                  </button>
                </CardActions>
              </Card>
              {/* ここに楽天 */}
              <Card sx={{ width: 345, height: 320, flex: "auto" }}>
                <RakutenRate />
              </Card>
            </Card>
          );
        } else {
          return (
            <Card
              sx={{
                // maxWidth: 345,
                maxWidth: 690,
                textAlign: "center",
                backgroundColor: "whitesmoke",
                marginBottom: 4,
                // display: "flex",
              }}
              key={ele.create_date}
              id={ele.id}
            >
              <Card sx={{ width: 345, flex: "auto" }}>
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
                  <IconButton size="small">
                    <UpdateIcon
                      fontSize="large"
                      sx={{ color: "blue" }}
                      onClick={handleUpdate}
                    />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon
                      fontSize="large"
                      sx={{ color: "red" }}
                      onClick={handleRemove}
                    />
                  </IconButton>
                  <button
                    onClick={() => {
                      setRakutenView(ind);
                    }}
                  >
                    楽天
                  </button>
                </CardActions>
              </Card>
            </Card>
          );
        }
      })}
    </Box>
  );
}
