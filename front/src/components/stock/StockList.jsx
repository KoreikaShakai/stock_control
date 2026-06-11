import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { StockListCard } from "./StockListCard";
import { atomFilterVali } from "./atoms";
import { atomReData } from "./atoms";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router";

export function StockList() {
  const nav = useNavigate();
  const reData = useAtomValue(atomReData);
  const [photos, setPhotos] = useState([]);
  const filterVali = useAtomValue(atomFilterVali);

  useEffect(() => {
    (async () => {
      const reqUser = await fetch("/api/firebase/authUser");
      const userJson = await reqUser.json();
      if (!userJson.status) {
        nav("/");
      }
      const reqData = await fetch(`/photos?user_id=${userJson.uid}`); //このid使いたくない
      const dataJson = await reqData.json();
      setPhotos(dataJson.data.sort((a, b) => b.status - a.status));
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
        {photos
          .filter(({ status }) => {
            return filterVali === 0 ? true : filterVali === status;
          })
          .map((ele, ind) => {
            console.log(ele);
            return <StockListCard key={ind} ele={ele} ind={ind} />;
          })}
      </Box>
    </>
  );
}
