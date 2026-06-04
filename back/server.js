const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { getTrump } = require("./getTruth");
const { translate } = require("@vitalets/google-translate-api");
const { createResponseBody } = require("./view/views");
const { getPhotos, uploadPhoto, s3GetSignedUrl } = require("./util/index");
const { responseTrump } = createResponseBody();
const knex = require("./knex");
const STOCK_DATA = "stock";
const NEWS_DATA = "news";
const multer = require("multer");
const upload = multer();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.get("/toranpu", (req, res) => {
  responseTrump(req, res);
});

app.get("/stock_dates", async (req, res) => {
  const id = req.query["user_id"];
  try {
    const result = await knex(STOCK_DATA).where("id", id);
    res.status(200).json(result);
    console.log(result);
    return;
  } catch (error) {
    console.error(error);
    return;
  }
});

app.post("/photos", upload.any(), async (req, res) => {
  const id = req.body.user_id;
  const file_name = req.files[0].originalname;
  const create_data = {
    user_id: id,
    photo_name: file_name,
  };
  try {
    const result = await knex(STOCK_DATA).insert(create_data, ["*"]);
    const data = await uploadPhoto(
      req.files[0].buffer,
      req.files[0].originalname,
    );
    console.log(data);
    res.status(200).json({ successe: true, data: data, result: result });
    return;
  } catch (error) {
    console.error(error);
    return;
  }
});

app.get("/get_photos", async (req, res) => {
  const id = req.query["user_id"];
  try {
    const data = await knex(STOCK_DATA)
      .select("photo_name", "create_date")
      .where("user_id", id);
    console.log("data", data[0]);
    const result = await Promise.all(
      data.map(async (photo) => {
        console.log("photo", photo);
        const url = await s3GetSignedUrl(photo);
        const res_object = {
          url: url,
          create_date: photo.create_date,
        };
        return res_object;
      }),
    );
    console.log(result);
    res.status(200).json({ successe: true, data: result });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ successe: false, data: "写真取得失敗" });
    return;
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
