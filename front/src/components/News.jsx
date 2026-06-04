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
    <div style={{ justifyItems: "center" }}>
      <Button sx={{ fontSize: 48 }}>TORANPU</Button>
    </div>
  );
}
