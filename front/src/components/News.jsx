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

  const [itemName, setItemName] = useState("");
  const [itemLink, setItemLink] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [reviewAve, setReviewAve] = useState("");
  const [itemImage, setItemImage] = useState(
    "https://thumbnail.image.rakuten.co.jp/@0_mall/e-rdc/cabinet/13288540/5.jpg?_ex=128x128",
  );

  const hundleButtonClick = async () => {
    console.log("oioi");
    const response = await fetch("/rakuten");
    const data = await response.json();
    console.log(data.Items[0].Item);
    setItemName(data.Items[0].Item.itemName);
    setItemLink(data.Items[0].Item.itemUrl);
    setItemPrice(data.Items[0].Item.itemPrice);
    setReviewAve(data.Items[0].Item.reviewAverage);
    setItemImage(data.Items[0].Item.mediumImageUrls[0].imageUrl);
    console.log(itemName, itemLink, itemPrice, reviewAve, itemImage);
  };

  return (
    <div style={{ justifyItems: "center" }}>
      <a href={itemLink} target="_blank" rel="noopener noreferrer">
        <img src={itemImage} alt={itemName} />
      </a>
      <h2>{itemName}</h2>
      <h2>評価{reviewAve}</h2>
      <h2>{itemPrice}円</h2>
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
