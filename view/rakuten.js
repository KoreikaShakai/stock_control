const APP_ID = "6a723290-d16d-4d45-b4d0-ef9fff4fb1de";
const acces_Key = "pk_kFbx3GoYL1HNJ2YdGgH3SeRdN0AWuM4NKFYMa19BwrY";

async function rakuten() {
  console.log("us");
  const URL =
    "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260401?applicationId=6a723290-d16d-4d45-b4d0-ef9fff4fb1de&accessKey=pk_kFbx3GoYL1HNJ2YdGgH3SeRdN0AWuM4NKFYMa19BwrY&keyword=寿司&hits=10";

  let keyWord = "13日の金曜日";
  let NGkeyword = "ふるさと納税";
  const url =
    "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260401" +
    `?applicationId=${APP_ID}` +
    `&accessKey=${acces_Key}` +
    `&keyword=${encodeURIComponent(keyWord)}` +
    `&NGKeyword=${encodeURIComponent(NGkeyword)}` +
    `&sort=-reviewCount`;
  ("&hits=10");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Referer: "https://rakuten.co.jp",
      Origin: "https://rakuten.co.jp",
    },
  });
  //   const response = await fetch(url);
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { rakuten };
