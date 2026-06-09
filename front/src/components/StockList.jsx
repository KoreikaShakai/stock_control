import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
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
          if (rakutenView === ind) {
            return (
              <StockListCard
                key={ele.create_date}
                ele={ele}
                ind={ind}
                isRakutenView={true}
                selectedIds={selectedPhotos}
                setSelectedIds={setSelectedPhotos}
                setIsUpload={setIsUpload}
                setRakutenView={setRakutenView}
              />
            );
          } else {
            return (
              <StockListCard
                key={ele.create_date}
                ele={ele}
                ind={ind}
                isRakutenView={false}
                selectedIds={selectedPhotos}
                setSelectedIds={setSelectedPhotos}
                setIsUpload={setIsUpload}
                setRakutenView={setRakutenView}
              />
            );
          }
        })}
      </Box>
    </>
  );
}
