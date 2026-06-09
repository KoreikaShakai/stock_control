const APP_ID = "6a723290-d16d-4d45-b4d0-ef9fff4fb1de";
const acces_Key = "pk_kFbx3GoYL1HNJ2YdGgH3SeRdN0AWuM4NKFYMa19BwrY";

const URL =
  "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260401?applicationId=6a723290-d16d-4d45-b4d0-ef9fff4fb1de&accessKey=pk_kFbx3GoYL1HNJ2YdGgH3SeRdN0AWuM4NKFYMa19BwrY&keyword=寿司&hits=10";

async function Rakuten() {
  let keyWord = "寿司";
  const url =
    "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260401" +
    `?applicationId=${APP_ID}` +
    `&accessKey=${acces_Key}` +
    `&keyword=${encodeURIComponent(keyWord)}` +
    "&hits=10";

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      Accept: `application/json`,
      Authorization: `Bearder ${acces_Key}`,
      Referer: window.location.origin,
      Origin: window.location.href,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export { Rakuten };
