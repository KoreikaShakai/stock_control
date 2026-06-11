const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { getPhotos, uploadPhoto, s3GetSignedUrl } = require("./util/index");
const { rakuten } = require("./view/rakuten");
const knex = require("./knex");
const STOCK_DATA = "stock";
const multer = require("multer");
const upload = multer();

const {
  signIn,
  signUp,
  signOutF,
  passwordReset,
  authState,
} = require("./firebase/index");
const { initStock } = require("./src/stock");

const stockRepository = initStock(knex);

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

app.post("/photos", upload.any(), async (req, res) => {
  const userId = req.body.user_id;
  const { name } = req.body;
  const fileName = req.files[0].originalname;
  try {
    const result = await stockRepository.create(userId, fileName, name);
    const data = await uploadPhoto(
      req.files[0].buffer,
      req.files[0].originalname,
    );
    res.status(200).json({ successe: true, data: data, result: result });
  } catch (error) {
    res.status(404).json({ a: false });
  }
});

app.get("/photos", async (req, res) => {
  // uid取得
  const userId = req.query["user_id"];
  try {
    const data = await stockRepository.findListByUserId(userId);
    const result = await Promise.all(
      data.map(async (photo) => {
        const url = await s3GetSignedUrl(photo.photo_name);
        const res_object = {
          url: url,
          create_date: photo.create_date,
          id: photo.id,
          is_shortage: photo.is_shortage,
          status: photo.status,
          name: photo.name,
        };
        return res_object;
      }),
    );
    res.status(200).json({ successe: true, data: result });
  } catch (error) {
    res.status(404).json({ successe: false, data: "写真取得失敗" });
  }
});

app.patch("/stock", async (req, res) => {
  const { id, status } = req.body;
  try {
    await stockRepository.updateStatusById(id, status);
    const result = await stockRepository.updateTimestampById(id);
    res.status(200).json({ success: true, data: result });
  } catch {
    res.status(404).json({ success: false, data: "修正失敗" });
  }
});

app.delete("/delete", async (req, res) => {
  const { id } = req.body;
  console.log("id", id);
  try {
    const result = await stockRepository.remove(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ successe: false, data: "削除失敗" });
  }
});

app.get("/rakuten", async (req, res) => {
  console.log("un");
  const data = await rakuten();
  res.json(data);
});

app.post("/api/firebase/signIn", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  const result = await signIn(email, pass);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(404).json(result);
  }
});
app.get("/api/firebase/signOut", async (req, res) => {
  await signOutF();
  res.json({ status: true, message: "ログアウトされました" });
});
app.post("/api/firebase/signUp", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  const result = await signUp(email, pass);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(404).json(result);
  }
});

app.get("/api/firebase/authUser", async (req, res) => {
  const loginUser = await authState();
  if (loginUser.status) {
    res.status(200).json(loginUser);
  } else {
    res.status(404).json(loginUser);
  }
});

// 一旦無くしてもいい
app.post("/api/firebase/passwordreset", async (req, res) => {
  const email = req.body.email;
  const result = await passwordReset(email);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(404).json(result);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
