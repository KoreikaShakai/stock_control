import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export function News() {
  const [news, setNews] = useState(null);
  const handleNewsCatch = async () => {
    const res = await fetch("/toranpu");
    const json = await res.json();
    console.log(json);
  };

  return (
    <>
      <Button onClick={handleNewsCatch}>キャッチ</Button>
    </>
  );
}
