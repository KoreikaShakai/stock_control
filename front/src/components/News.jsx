import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Rakuten } from "../../../rakuten";
export function News() {
  const [news, setNews] = useState(null);
  const handleNewsCatch = async () => {
    const res = await fetch("/toranpu");
    const json = await res.json();
    console.log(json);
  };

  const hundleButtonClick = async () => {
    console.log("oioi");
    const response = await fetch("/rakuten");
    const data = await response.json();
    console.log(data.Items[0].Item);
  };

  return (
    <div style={{ justifyItems: "center" }}>
      <Button
        sx={{ fontSize: 48 }}
        onClick={() => {
          hundleButtonClick();
        }}
      >
        TORANPU
      </Button>
    </div>
  );
}
