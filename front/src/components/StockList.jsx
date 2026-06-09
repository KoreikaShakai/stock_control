import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Box,
  Checkbox,
} from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";

export function StockList({ isUpload, setIsUpload }) {
  const [photos, setPhotos] = useState([]);
  const refCard = useRef("");
  const [selectedPhotos, setSelectedPhotos] = useState([]);

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

  const handleSelect = async (stockId) => {
    const arr = [...selectedPhotos];
    arr.indexOf(stockId) === -1
      ? setSelectedPhotos([...arr, stockId])
      : setSelectedPhotos(arr.toSpliced(arr.indexOf(stockId), 1));
  };

  const handleToggle = async () => {
    const req = {
      isShortageIdsList: selectedPhotos,
    };
    console.log("req", req);
    await fetch("/photos", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    setSelectedPhotos([]);
    setIsUpload((is) => !is);
  };

  useEffect(() => {
    fetch(`/photos?user_id=${localStorage.getItem("user_id")}`)
      .then((res) => res.json())
      .then((res) => setPhotos((list) => res.data));
  }, [isUpload]);

  return (
    <>
      {selectedPhotos.length !== 0 && (
        <button onClick={handleToggle}>切り替え</button>
      )}
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
                marginBottom: 4,
                opacity: ele.is_shortage ? 0.4 : 1,
              }}
              key={ele.create_date}
              id={ele.id}
              onClick={() => handleSelect(ele.id)}
            >
              <CardMedia sx={{ height: 320 }} image={ele.url} />
              <CardContent>
                {selectedPhotos.includes(ele.id) && (
                  <Checkbox
                    defaultChecked
                    sx={{
                      overlay: "auto",
                    }}
                  ></Checkbox>
                )}
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
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
