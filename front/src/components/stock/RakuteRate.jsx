import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export function RakutenRate() {
  // データ取得
  const data = [
    {
      id: 1,
      reviewAverage: 4.82,
      itemPrice: 2290,
      itemName:
        "1【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
    {
      id: 2,
      reviewAverage: 3,
      itemPrice: 10,
      itemName:
        "2【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
    {
      id: 3,
      reviewAverage: 2,
      itemPrice: 2290,
      itemName:
        "3【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
    {
      id: 4,
      reviewAverage: 5,
      itemPrice: 2290,
      itemName:
        "3【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
    {
      id: 5,
      reviewAverage: 5,
      itemPrice: 2290,
      itemName:
        "3【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
    {
      id: 6,
      reviewAverage: 5,
      itemPrice: 2290,
      itemName:
        "3【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
    {
      id: 7,
      reviewAverage: 5,
      itemPrice: 2290,
      itemName:
        "3【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
    {
      id: 8,
      reviewAverage: 5,
      itemPrice: 2290,
      itemName:
        "3【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
    {
      id: 9,
      reviewAverage: 5,
      itemPrice: 2290,
      itemName:
        "3【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
    {
      id: 10,
      reviewAverage: 5,
      itemPrice: 2290,
      itemName:
        "3【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
    {
      id: 11,
      reviewAverage: 5,
      itemPrice: 2290,
      itemName:
        "3【2,380円→SALE 2,299円(350ml対象)｜4日20:00～11日9:59】BIYOUDO 水 シリカ水 500ml×42本 350ml×48本 ナチュラルミネラルウォーター ラベルレス 軟水 美容ミネラル シリカ含有 天然水 飲むシリカ 500 保存料なし 酵素ドリンク 等にも 保存水 国産 日本製 美陽堂 公式",
      shopName: "コカコーラ",
      smallImageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/biyoudou/cabinet/salethumb/imgrc0105029580.jpg?_ex=64x64",
      itemUrl:
        "https://item.rakuten.co.jp/soukaidrink/4902102139410/?rafcid=wsc_i_is_6a723290-d16d-4d45-b4d0-ef9fff4fb1de",
    },
  ];

  console.log(data.sort((a, b) => b.reviewAverage - a.reviewAverage));

  //   <TableContainer sx={{ flex: "auto" }}>
  //     <Table sx={{ width: 345, height: 320, flex: "auto" }}>
  //       <TableHead>
  //         <TableCell>価格</TableCell>
  //         <TableCell>評価</TableCell>
  //         <TableCell>商品名</TableCell>
  //       </TableHead>
  //     </Table>
  //   </TableContainer>;

  const columns = [
    // { field: "id", headerName: "id" },
    { field: "itemPrice", headerName: "価格" },
    { field: "reviewAverage", headerName: "評価" },
    { field: "itemName", headerName: "商品名" },
  ];

  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <Paper sx={{ flex: "auto" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        // pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
