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
import dayjs from "dayjs";
import { RakutenRate } from "./stock/RakuteRate";
import { StockListCard } from "./StockListCard";

export function StockList({ isUpload, setIsUpload }) {
  // ログインされていなければ戻す？

  const [rakutenView, setRakutenView] = useState(-1);
  const [photos, setPhotos] = useState([]);
  const refCard = useRef("");
  const [selectedPhotos, setSelectedPhotos] = useState([]);

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
    (async () => {
      const reqUser = await fetch("/api/firebase/authUser");
      const userJson = await reqUser.json();
      const reqData = await fetch(`/photos?user_id=${userJson.uid}`);
      const dataJson = await reqData.json();
      setPhotos((list) => dataJson.data);
    })();
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
          return (
            <StockListCard
              key={ele.id}
              item={ele}
              selectedIds={selectedPhotos}
              setSelectedIds={setSelectedPhotos}
              dateTo={dayjs(ele.create_date)}
              dateFrom={dayjs()}
              isUpload={isUpload}
              setIsUpload={setIsUpload}
            />
          );
        })}
      </Box>
    </>
  );
}
