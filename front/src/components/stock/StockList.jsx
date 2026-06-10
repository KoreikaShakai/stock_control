import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { StockListCard } from "./StockListCard";
import { atomReData } from "./atoms";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router";

export function StockList() {
  const nav = useNavigate();
  const reData = useAtomValue(atomReData);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      const reqUser = await fetch("/api/firebase/authUser");
      const userJson = await reqUser.json();
      if (!userJson.status) {
        nav("/");
      }
      const reqData = await fetch(`/photos?user_id=${userJson.uid}`); //このid使いたくない
      const dataJson = await reqData.json();
      setPhotos(dataJson.data.sort((a, b) => b - a));
    })();
  }, [reData]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          margin: "10px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {photos.map((ele, ind) => {
          return <StockListCard key={ind} ele={ele} ind={ind} />;
        })}
      </Box>
    </>
  );
}
