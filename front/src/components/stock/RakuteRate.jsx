import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";

export function RakutenRate() {
  // データ取得
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const datanow = [];
    const itemData = async () => {
      const response = await fetch("/rakuten");
      const data = await response.json();
      let i;
      for (i = 0; i <= 9; i++) {
        datanow.push({
          id: i + 1,
          itemNames: data.Items[i].Item.itemName,
          itemLinks: data.Items[i].Item.itemUrl,
          itemPrices: data.Items[i].Item.itemPrice,
          reviewAves: data.Items[i].Item.reviewAverage,
          avatar: data.Items[i].Item.mediumImageUrls[0]?.imageUrl,
        });
      }
      setDataList(datanow);
    };
    itemData();
  }, []);
  const columns = [
    // { field: "id", headerName: "id" },
    {
      field: "itemImages",
      headerName: "画像",
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <a
              href={params.row.itemLinks}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar src={params.row.avatar} alt={params.row.itemName} />
            </a>
          </>
        );
      },
    },
    { field: "itemPrices", headerName: "価格" },
    { field: "reviewAves", headerName: "評価" },
    { field: "itemNames", headerName: "商品名" },
  ];

  const paginationModel = { page: 0, pageSize: 10 };
  return (
    <Paper sx={{ flex: "auto" }}>
      <DataGrid
        rows={dataList}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
