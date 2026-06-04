const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { getTrump } = require("./getTruth");
const { translate } = require("@vitalets/google-translate-api");
const { createResponseBody } = require("./view/views");
const { uploadPhoto, getPhotos } = require("./utils/index");
const multer = require("multer");

const { responseTrump } = createResponseBody();

const upload = multer();

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());

app.get("/toranpu", (res, req) => {
  responseTrump(req, res);
});

app.get("/photos", async (req, res) => {
  const photos = await getPhotos();
  res.status(200).send({ photos });
});

app.post("/photos", upload.any(), async (req, res) => {
  const data = await uploadPhoto(
    req.files[0].buffer,
    req.files[0].originalname,
  );
  res.status(200).send({ data });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
